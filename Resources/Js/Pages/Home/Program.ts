import { NullOrHtmlInputElement , NullOrHtmlElement } from "../../Types/Utils.js";

class Program {
    protected email : NullOrHtmlInputElement = null ;
    protected password : NullOrHtmlInputElement = null ;
    protected loading : NullOrHtmlElement = null ;
    protected notificationContainer : NullOrHtmlElement = null ;
    main():void {
        this.notificationContainer = window.document.body.querySelector("#notification-container");
        this.email = window.document.body.querySelector('#email');
        this.password = window.document.body.querySelector("#password");
        this.loading = window.document.body.querySelector("#loading");

        const loginButton : HTMLButtonElement = <HTMLButtonElement> window.document.body.querySelector("#login-button");
        loginButton.addEventListener('click',this.loginButtonClickListener);
    }
    protected loginButtonClickListener = (event:MouseEvent):void => {
        event.preventDefault();
        const email:string = <string>this.email?.value;
        const password:string = <string>this.password?.value;
        this.login(email,password);
    }
    protected login(email : string , password : string ):void {
        const request :XMLHttpRequest = new XMLHttpRequest;
        request.addEventListener('load',this.responseReciveListener);
        request.open("POST","Ajax/login.php");
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.send(`email=${email}&password=${password}`);
        this.showLoading();
    }
    protected responseReciveListener = (event : ProgressEvent):void => {
        const request : XMLHttpRequest = <XMLHttpRequest> event.target;
        const status : number = request.status ;
        this.hideLoading();
        if(status!==200 && status!==403)
            return ;
        if(status===200)
            return this.successfullAuth();
        this.dispatchFailAuthNotification();
    }
    protected redirectToDashboard():void {
        window.location.assign("panel.php");
    }
    protected pureNotification():HTMLElement {
        const notification : HTMLElement = window.document.createElement("div");
        notification.classList.add('notification');
        return notification;
    }
    protected errorNotification():HTMLElement {
        const notification : HTMLElement = this.pureNotification();
        notification.classList.add('error');
        return notification;
    }
    protected okNotification():HTMLElement {
        const notification : HTMLElement = this.pureNotification();
        notification.classList.add('ok');
        return notification;
    }
    protected removeNotificationAfter(notification : HTMLElement , delay :number ):void {
        window.setTimeout(this.notificationRemover,delay,notification);
    }
    protected notificationRemover(notification : HTMLElement){
        notification.remove();
    }
    protected dispatchFailAuthNotification():void {
        const notification : HTMLElement = this.errorNotification();
        notification.innerHTML = "wrong username or password !!!";
        this.notificationContainer?.appendChild(notification);
        this.removeNotificationAfter(notification,5000);
    }
    protected dispatchSuccessfullAuthNotification():void {
        const notification : HTMLElement = this.okNotification();
        notification.innerHTML = "youre successfully login in system ";
        this.notificationContainer?.appendChild(notification);
        this.removeNotificationAfter(notification,3000);
    }
    protected showLoading():void {
        this.loading?.classList.add('show');
    }
    protected hideLoading():void {
        this.loading?.classList.remove('show');
    }
    protected successfullAuth():void {
        this.dispatchSuccessfullAuthNotification();
        this.redirectToDashboardAfter(3010);
    }
    protected redirectToDashboardAfter(delay:number){
        window.setTimeout(this.redirectToDashboard,delay);
    }
}
export default Program;