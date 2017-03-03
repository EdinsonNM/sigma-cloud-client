export default `
<div id="myapp">
<paper-button raised>Hi</paper-button>
<paper-button>Hola</paper-button>
<div id="view">MIS VISTA</div>
<a href="#/login" is="rebel-back-a">Login</a>
<a href="#/main" is="rebel-back-a">Main</a>
<rebel-router animation="false" shadow="false">
    <rebel-route path="/login" component="app-login"></rebel-route>
    <rebel-route path="/main" component="app-main"></rebel-route>
    <rebel-default component="app-login"></rebel-default>
</rebel-router>
</div>

`;

