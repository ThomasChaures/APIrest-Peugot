export const crearPagina = (title, contenido) => {
  const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
      <title>Peugot - ${title}</title>
    </head>
    <body>
    
       <header>
             <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Peugot</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link " href="/">Vehiculos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/types/hatchback">Hatchback</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/types/suv">SUV</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/types/sedan">Sedan</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="/types/mvp">MVP</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
       </header>

      <main  class=" mx-auto" style="max-width: 1200px;">
      <h2 class="mb-5 mt-5">${title}</h2>

      <section class="d-flex flex-wrap justify-content-start align-items-center mx-auto" style="max-width: 1200px;">
      ${contenido}
      </section>
      </main>
      </body>
      </html>
    `;
  return html;
};

export const todosLosAutos = (autos) => {
  let html = "";
  for (let auto of autos) {
    html += `
          <div class="card mx-2 my-4" style="width: 20rem;">
              
                  <img class="card-img-top"  src="/images.jpeg" alt="Imagen de ${auto.model}" />
                           
              <div class="card-body">
               <h2 class="card-title">${auto.model}</h2>
                  <p class="card-text">Tipo: ${auto.type}</p>
                  <p class="card-text">Descripcion: ${auto.description}</p>
                  <p>Precio: $${auto.price_usd}</p>
              </div>
              <a  class="btn btn-primary" href="/${auto.id}">Ver más</a> 
          </div>
      `;
  }
  return html;
};

export const autoId = (auto) => {
  let html = `
          <div class="card mx-2 my-4" style="width: 20rem;">
              
                  <img class="card-img-top" src="/images.jpeg" alt="Imagen de ${auto.model}" />
                           
              <div class="card-body">
               <h2 class="card-title">${auto.model}</h2>
                   <p class="card-text"><strong>Año:</strong> ${auto.year} </p>
                  <p class="card-text"><strong>Tipo:</strong> ${auto.type}</p>
                    <p class="card-text"><strong>Motor:</strong> ${auto.engine} </p>
                      <p class="card-text"><strong>Caballos de fuerza:</strong> ${auto.horsepower} </p>
                  <p class="card-text"><strong>Descripcion:</strong> ${auto.description}</p>
                 
                    <p class="card-text"> </p>
                  <p><strong>Precio:</strong> $${auto.price_usd}</p>
              </div>
          </div>
      `;

  return html;
};
