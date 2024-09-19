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
          <li><a href="/peugot/types">Tipos de Vehículo</a></li>
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
        
    }
}
