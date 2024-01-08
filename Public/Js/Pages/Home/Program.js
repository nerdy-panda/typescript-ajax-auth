class Program {
    constructor() {
        this.email = null;
        this.password = null;
        this.loading = null;
        this.notificationContainer = null;
        this.loginButtonClickListener = (event) => {
            var _a, _b;
            event.preventDefault();
            const email = (_a = this.email) === null || _a === void 0 ? void 0 : _a.value;
            const password = (_b = this.password) === null || _b === void 0 ? void 0 : _b.value;
            this.login(email, password);
        };
        this.responseReciveListener = (event) => {
            const request = event.target;
            const status = request.status;
            this.hideLoading();
            if (status !== 200 && status !== 403)
                return;
            if (status === 200)
                return this.successfullAuth();
            this.dispatchFailAuthNotification();
        };
    }
    main() {
        this.notificationContainer = window.document.body.querySelector("#notification-container");
        this.email = window.document.body.querySelector('#email');
        this.password = window.document.body.querySelector("#password");
        this.loading = window.document.body.querySelector("#loading");
        const loginButton = window.document.body.querySelector("#login-button");
        loginButton.addEventListener('click', this.loginButtonClickListener);
    }
    login(email, password) {
        const request = new XMLHttpRequest;
        request.addEventListener('load', this.responseReciveListener);
        request.open("POST", "Ajax/login.php");
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.send(`email=${email}&password=${password}`);
        this.showLoading();
    }
    redirectToDashboard() {
        window.location.assign("panel.php");
    }
    pureNotification() {
        const notification = window.document.createElement("div");
        notification.classList.add('notification');
        return notification;
    }
    errorNotification() {
        const notification = this.pureNotification();
        notification.classList.add('error');
        return notification;
    }
    okNotification() {
        const notification = this.pureNotification();
        notification.classList.add('ok');
        return notification;
    }
    removeNotificationAfter(notification, delay) {
        window.setTimeout(this.notificationRemover, delay, notification);
    }
    notificationRemover(notification) {
        notification.remove();
    }
    dispatchFailAuthNotification() {
        var _a;
        const notification = this.errorNotification();
        notification.innerHTML = "wrong username or password !!!";
        (_a = this.notificationContainer) === null || _a === void 0 ? void 0 : _a.appendChild(notification);
        this.removeNotificationAfter(notification, 5000);
    }
    dispatchSuccessfullAuthNotification() {
        var _a;
        const notification = this.okNotification();
        notification.innerHTML = "youre successfully login in system ";
        (_a = this.notificationContainer) === null || _a === void 0 ? void 0 : _a.appendChild(notification);
        this.removeNotificationAfter(notification, 3000);
    }
    showLoading() {
        var _a;
        (_a = this.loading) === null || _a === void 0 ? void 0 : _a.classList.add('show');
    }
    hideLoading() {
        var _a;
        (_a = this.loading) === null || _a === void 0 ? void 0 : _a.classList.remove('show');
    }
    successfullAuth() {
        this.dispatchSuccessfullAuthNotification();
        this.redirectToDashboardAfter(3010);
    }
    redirectToDashboardAfter(delay) {
        window.setTimeout(this.redirectToDashboard, delay);
    }
}
export default Program;
//# sourceMappingURL=Program.js.map