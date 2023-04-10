
export default function Navigation() {
  return (
    <div className="App">
          <head>
    <title>MotoGP Utility</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css" />
    <link rel="stylesheet" href="src/css/riders.css" />
    </head>
            <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="index.html">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Moto_Gp_logo.svg" width="112" height="28" />
        </a>
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="index.html">
            Race Schedule
          </a>
          <a class="navbar-item" href="#">
            Riders
          </a>
        </div>

        <div class="navbar-end">
        </div>
      </div>
    </nav>
    </div>
  )
}


