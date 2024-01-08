class Program {
    constructor() {
        this.logoutButtonClickListener = (event) => {
            event.preventDefault();
            this.logout();
        };
        this.responseReciveListener = (event) => {
            window.location.assign('Home.php');
        };
    }
    main() {
        const logoutButton = window.document.body.querySelector("#logout-button");
        logoutButton.addEventListener('click', this.logoutButtonClickListener);
    }
    logout() {
        const request = new XMLHttpRequest();
        request.addEventListener('load', this.responseReciveListener);
        request.open("GET", "Ajax/logout.php");
        request.send();
    }
}
export default Program;
//# sourceMappingURL=Program.js.map