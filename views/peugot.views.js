export const crearPagina = (title, contenido) => {
  const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Peugot - ${title}</title>
    </head>
    <body>
    
      <nav>
        <ul>
          <li><a href="/peugot">Vehículos</a></li>
          <li><a href="/peugot/types/hatchback">Hatchback</a></li>
          <li><a href="/peugot/types/suv">SUV</a></li>
          <li><a href="/peugot/types/sedan">Sedan</a></li>
          <li><a href="/peugot/types/mvp">MVP</a></li>
        </ul>
      </nav>


      <main>
      <h2>${title}</h2>

      <section>
      ${contenido}
      </section>
      </main>
      </body>
      </html>
    `;
  return html;
};


export const todosLosAutos = (autos) => {
    for(let auto in autos){
        const html = `
            <div>
                <div class="img">
                    <img src="../${auto.img}" alt="Imagen de ${auto.name}" />
                </div>
                <h2> ${auto.name} </h2>
                <div class="text">
                    <p>Modelo: ${auto.modelo}</p>
                    <p>Descripcion: ${auto.description}</p>
                    <p>Precio: ${auto.price}</p>
                </div>
                <a href="/peugot/${auto.id}">Ver mas</a> 
            </div>
        `
    }
}
