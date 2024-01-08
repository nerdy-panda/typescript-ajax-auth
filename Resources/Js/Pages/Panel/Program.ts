class Program {
    
    main():void {
        const logoutButton : HTMLButtonElement = <HTMLButtonElement> window.document.body.querySelector("#logout-button");
        logoutButton.addEventListener('click',this.logoutButtonClickListener);
    }
    protected logoutButtonClickListener = (event : MouseEvent):void => {
        event.preventDefault();
        this.logout();
    }
    protected logout():void {
        const request : XMLHttpRequest = new XMLHttpRequest();
        request.addEventListener('load',this.responseReciveListener);
        request.open("GET","Ajax/logout.php");
        request.send();
    }
    protected responseReciveListener = (event:ProgressEvent):void =>  {
        window.location.assign('Home.php');
    }
}
export default Program;