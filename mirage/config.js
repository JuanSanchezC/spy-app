export default function() {
  this.namespace = '/api';
  this.get('/spies', function() {
    return {
      data: [{
        type: 'spies',
        id: 'spy001',
        attributes: {
          name: 'Brayan Maison',
          city: 'Medellín',
          type: 'Espía',
          image: 'http://cdn01.am.infobae.com/adjuntos/163/infografia/013/330/0013330024.jpg?0000-00-00-00-00-00'
        }
      }, {
        type: 'spies',
        id: 'spy002',
        attributes: {
          name: 'María Calamidades',
          city: 'Bogotá',
          type: 'Espía',
          image: 'http://www.cineycine.com/archivos/2099/09/espias-lucha.jpg'
        }
      }, {
        type: 'spies',
        id: 'spy003',
        attributes: {
          name: 'Otilio Benavidez',
          city: 'Valle',
          type: 'Luchador',
          image: 'https://gimnasiorizo.files.wordpress.com/2015/02/img_0291.jpg'
        }
      }]
    };
  });

  // Find and return the provided spy from our spy list above
  this.get('/spies/:id', function (db, request) {
    return { data: spy.find((spy) => request.params.id === spy.id) };
  });
}
