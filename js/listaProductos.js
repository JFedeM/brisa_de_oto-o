//PRODUCTOS
const productos = [
    //BLUSAS y CAMISAS
    {
      "id": "blusa-01",
      titulo: "Blusa Emily 01",
      imagen: "Imagenes/imagenes_producto_blusas/1.jpg",
      categoria: {
        nombre: "Blusas y Camisas",
        "id": "blusas",
      },
      precio: 3200,
    },
    {
      "id": "blusa-02",
      titulo: "Blusa Emily 02",
      imagen: "Imagenes/imagenes_producto_blusas/2.jpg",
      categoria: {
        nombre: "Blusas y Camisas",
        id: "blusas",
      },
      precio: 3200,
    },
    {
      id: "blusa-03",
      titulo: "Blusa Emily 03",
      imagen: "Imagenes/imagenes_producto_blusas/3.jpg",
      categoria: {
        nombre: "Blusas y Camisas",
        id: "blusas",
      },
      precio: 3200,
    },
    {
      id: "blusa-04",
      titulo: "Blusa Emily 04",
      imagen: "Imagenes/imagenes_producto_blusas/4.jpg",
      categoria: {
        nombre: "Blusas y Camisas",
        id: "blusas",
      },
      precio: 3200,
    },
    {
      id: "blusa-05",
      titulo: "Blusa Emily 05",
      imagen: "Imagenes/imagenes_producto_blusas/5.jpg",
      categoria: {
        nombre: "Blusas y Camisas",
        id: "blusas",
      },
      precio: 3200,
    },
    {
      id: "blusa-06",
      titulo: "Blusa Emily 06",
      imagen: "Imagenes/imagenes_producto_blusas/6.jpg",
      categoria: {
        nombre: "Blusas y Camisas",
        id: "blusas",
      },
      precio: 3200,
    },
    {
      id: "blusa-07",
      titulo: "Blusa Emily 07",
      imagen: "Imagenes/imagenes_producto_blusas/7.jpg",
      categoria: {
        nombre: "Blusas y Camisas",
        id: "blusas",
      },
      precio: 3200,
    },
    {
      id: "blusa-08",
      titulo: "Blusa Emily 08",
      imagen: "Imagenes/imagenes_producto_blusas/8.jpg",
      categoria: {
        nombre: "Blusas y Camisas",
        id: "blusas",
      },
      precio: 3200,
    },
    {
      id: "blusa-09",
      titulo: "Blusa Emily 09",
      imagen: "Imagenes/imagenes_producto_blusas/9.jpg",
      categoria: {
        nombre: "Blusas y Camisas",
        id: "blusas",
      },
      precio: 3200,
    },
    {
      id: "blusa-10",
      titulo: "Blusa Emily 10",
      imagen: "Imagenes/imagenes_producto_blusas/10.jpg",
      categoria: {
        nombre: "Blusas y Camisas",
        id: "blusas",
      },
      precio: 3200,
    },
    {
      id: "blusa-11",
      titulo: "Blusa Emily 11",
      imagen: "Imagenes/imagenes_producto_blusas/11.jpg",
      categoria: {
        nombre: "Blusas y Camisas",
        id: "blusas",
      },
      precio: 3200,
    },
    {
      id: "blusa-12",
      titulo: "Blusa Emily 12",
      imagen: "Imagenes/imagenes_producto_blusas/12.jpg",
      categoria: {
        nombre: "Blusas y Camisas",
        id: "blusas",
      },
      precio: 3200,
    },
    {
      id: "blusa-13",
      titulo: "Blusa Emily 13",
      imagen: "Imagenes/imagenes_producto_blusas/13.jpg",
      categoria: {
        nombre: "Blusas y Camisas",
        id: "blusas",
      },
      precio: 3200,
    },
    //ABRIGOS
    {
      id: "abrigo-01",
      titulo: "Abrigo Emily 01",
      imagen: "Imagenes/imagenes_producto_abrigos/1.jpg",
      categoria: {
        nombre: "Abrigos",
        id: "abrigos",
      },
      precio: 6700,
    },
    {
      id: "abrigo-02",
      titulo: "Abrigo Emily 02",
      imagen: "Imagenes/imagenes_producto_abrigos/2.jpg",
      categoria: {
        nombre: "Abrigos",
        id: "abrigos",
      },
      precio: 6700,
    },
    {
      id: "abrigo-03",
      titulo: "Abrigo Emily 03",
      imagen: "Imagenes/imagenes_producto_abrigos/3.jpg",
      categoria: {
        nombre: "Abrigos",
        id: "abrigos",
      },
      precio: 6700,
    },
    {
      id: "abrigo-04",
      titulo: "Abrigo Emily 04",
      imagen: "Imagenes/imagenes_producto_abrigos/4.jpg",
      categoria: {
        nombre: "Abrigos",
        id: "abrigos",
      },
      precio: 6700,
    },
    {
      id: "abrigo-05",
      titulo: "Abrigo Emily 05",
      imagen: "Imagenes/imagenes_producto_abrigos/5.jpg",
      categoria: {
        nombre: "Abrigos",
        id: "abrigos",
      },
      precio: 6700,
    },
    {
      id: "abrigo-06",
      titulo: "Abrigo Emily 06",
      imagen: "Imagenes/imagenes_producto_abrigos/6.jpg",
      categoria: {
        nombre: "Abrigos",
        id: "abrigos",
      },
      precio: 6700,
    },
    {
      id: "abrigo-07",
      titulo: "Abrigo Emily 07",
      imagen: "Imagenes/imagenes_producto_abrigos/7.jpg",
      categoria: {
        nombre: "Abrigos",
        id: "abrigos",
      },
      precio: 6700,
    },
    {
      id: "abrigo-08",
      titulo: "Abrigo Emily 08",
      imagen: "Imagenes/imagenes_producto_abrigos/8.jpg",
      categoria: {
        nombre: "Abrigos",
        id: "abrigos",
      },
      precio: 6700,
    },
    //PANTALONES
    {
      id: "pantalon-01",
      titulo: "Pantalon Emily 01",
      imagen: "Imagenes/imagenes_producto_pantalones/1.jpg",
      categoria: {
        nombre: "Pantalones",
        id: "pantalones",
      },
      precio: 4500,
    },
    {
      id: "pantalon-02",
      titulo: "Pantalon Emily 02",
      imagen: "Imagenes/imagenes_producto_pantalones/2.jpg",
      categoria: {
        nombre: "Pantalones",
        id: "pantalones",
      },
      precio: 4500,
    },
    {
      id: "pantalon-03",
      titulo: "Pantalon Emily 03",
      imagen: "Imagenes/imagenes_producto_pantalones/3.jpg",
      categoria: {
        nombre: "Pantalones",
        id: "pantalones",
      },
      precio: 4500,
    },
    {
      id: "pantalon-04",
      titulo: "Pantalon Emily 04",
      imagen: "Imagenes/imagenes_producto_pantalones/4.jpg",
      categoria: {
        nombre: "Pantalones",
        id: "pantalones",
      },
      precio: 4500,
    },
    {
      id: "pantalon-05",
      titulo: "Pantalon Emily 05",
      imagen: "Imagenes/imagenes_producto_pantalones/5.jpg",
      categoria: {
        nombre: "Pantalones",
        id: "pantalones",
      },
      precio: 4500,
    },
    {
      id: "pantalon-06",
      titulo: "Pantalon Emily 06",
      imagen: "Imagenes/imagenes_producto_pantalones/6.jpg",
      categoria: {
        nombre: "Pantalones",
        id: "pantalones",
      },
      precio: 4500,
    },
    {
      id: "pantalon-07",
      titulo: "Pantalon Emily 07",
      imagen: "Imagenes/imagenes_producto_pantalones/7.jpg",
      categoria: {
        nombre: "Pantalones",
        id: "pantalones",
      },
      precio: 4500,
    },
    {
      id: "pantalon-08",
      titulo: "Pantalon Emily 08",
      imagen: "Imagenes/imagenes_producto_pantalones/8.jpg",
      categoria: {
        nombre: "Pantalones",
        id: "pantalones",
      },
      precio: 4500,
    },
    {
      id: "pantalon-09",
      titulo: "Pantalon Emily 09",
      imagen: "Imagenes/imagenes_producto_pantalones/9.jpg",
      categoria: {
        nombre: "Pantalones",
        id: "pantalones",
      },
      precio: 4500,
    },
    {
      id: "pantalon-10",
      titulo: "Pantalon Emily 10",
      imagen: "Imagenes/imagenes_producto_pantalones/10.jpg",
      categoria: {
        nombre: "Pantalones",
        id: "pantalones",
      },
      precio: 4500,
    },
    {
      id: "pantalon-11",
      titulo: "Pantalon Emily 11",
      imagen: "Imagenes/imagenes_producto_pantalones/11.jpg",
      categoria: {
        nombre: "Pantalones",
        id: "pantalones",
      },
      precio: 4500,
    },
    {
      id: "pantalon-12",
      titulo: "Pantalon Emily 12",
      imagen: "Imagenes/imagenes_producto_pantalones/12.jpg",
      categoria: {
        nombre: "Pantalones",
        id: "pantalones",
      },
      precio: 4500,
    },
    {
      id: "pantalon-13",
      titulo: "Pantalon Emily 13",
      imagen: "Imagenes/imagenes_producto_pantalones/13.jpg",
      categoria: {
        nombre: "Pantalones",
        id: "pantalones",
      },
      precio: 4500,
    },
    {
      id: "pantalon-14",
      titulo: "Pantalon Emily 14",
      imagen: "Imagenes/imagenes_producto_pantalones/14.jpg",
      categoria: {
        nombre: "Pantalones",
        id: "pantalones",
      },
      precio: 4500,
    },
    {
      id: "pantalon-15",
      titulo: "Pantalon Emily 15",
      imagen: "Imagenes/imagenes_producto_pantalones/15.jpg",
      categoria: {
        nombre: "Pantalones",
        id: "pantalones",
      },
      precio: 4500,
    },
    {
      id: "pantalon-16",
      titulo: "Pantalon Emily 16",
      imagen: "Imagenes/imagenes_producto_pantalones/16.jpg",
      categoria: {
        nombre: "Pantalones",
        id: "pantalones",
      },
      precio: 4500,
    },
    {
      id: "remera-01",
      titulo: "Remera Emily 01",
      imagen: "Imagenes/imagenes_producto_remeras/1.jpg",
      categoria: {
        nombre: "Remeras",
        id: "remeras",
      },
      precio: 2500,
    },
    {
      id: "remera-02",
      titulo: "Remera Emily 02",
      imagen: "Imagenes/imagenes_producto_remeras/2.jpg",
      categoria: {
        nombre: "Remeras",
        id: "remeras",
      },
      precio: 2500,
    },
    {
      id: "remera-03",
      titulo: "Remera Emily 03",
      imagen: "Imagenes/imagenes_producto_remeras/3.jpg",
      categoria: {
        nombre: "Remeras",
        id: "remeras",
      },
      precio: 2500,
    },
    {
      id: "remera-04",
      titulo: "Remera Emily 04",
      imagen: "Imagenes/imagenes_producto_remeras/4.jpg",
      categoria: {
        nombre: "Remeras",
        id: "remeras",
      },
      precio: 2500,
    },
    {
      id: "remera-05",
      titulo: "Remera Emily 05",
      imagen: "Imagenes/imagenes_producto_remeras/5.jpg",
      categoria: {
        nombre: "Remeras",
        id: "remeras",
      },
      precio: 2500,
    },
    {
      id: "remera-06",
      titulo: "Remera Emily 06",
      imagen: "Imagenes/imagenes_producto_remeras/6.jpg",
      categoria: {
        nombre: "Remeras",
        id: "remeras",
      },
      precio: 2500,
    },
    {
      id: "remera-07",
      titulo: "Remera Emily 07",
      imagen: "Imagenes/imagenes_producto_remeras/7.jpg",
      categoria: {
        nombre: "Remeras",
        id: "remeras",
      },
      precio: 2500,
    },
    {
      id: "remera-08",
      titulo: "Remera Emily 08",
      imagen: "Imagenes/imagenes_producto_remeras/8.jpg",
      categoria: {
        nombre: "Remeras",
        id: "remeras",
      },
      precio: 2500,
    },
    {
      id: "remera-09",
      titulo: "Remera Emily 09",
      imagen: "Imagenes/imagenes_producto_remeras/9.jpg",
      categoria: {
        nombre: "Remeras",
        id: "remeras",
      },
      precio: 2500,
    },
    {
      id: "remera-10",
      titulo: "Remera Emily 10",
      imagen: "Imagenes/imagenes_producto_remeras/10.jpg",
      categoria: {
        nombre: "Remeras",
        id: "remeras",
      },
      precio: 2500,
    },
    {
      id: "remera-11",
      titulo: "Remera Emily 11",
      imagen: "Imagenes/imagenes_producto_remeras/11.jpg",
      categoria: {
        nombre: "Remeras",
        id: "remeras",
      },
      precio: 2500,
    },
    {
      id: "remera-12",
      titulo: "Remera Emily 12",
      imagen: "Imagenes/imagenes_producto_remeras/12.jpg",
      categoria: {
        nombre: "Remeras",
        id: "remeras",
      },
      precio: 2500,
    },
    {
      id: "sweater-01",
      titulo: "Sweater Emily 01",
      imagen: "Imagenes/imagenes_producto_sweaters/1.jpg",
      categoria: {
        nombre: "Sweaters",
        id: "sweaters",
      },
      precio: 3800,
    },
    {
      id: "sweater-2",
      titulo: "Sweater Emily 02",
      imagen: "Imagenes/imagenes_producto_sweaters/2.jpg",
      categoria: {
        nombre: "Sweaters",
        id: "sweaters",
      },
      precio: 3800,
    },
    {
      id: "sweater-03",
      titulo: "Sweater Emily 03",
      imagen: "Imagenes/imagenes_producto_sweaters/3.jpg",
      categoria: {
        nombre: "Sweaters",
        id: "sweaters",
      },
      precio: 3800,
    },
    {
      id: "sweater-04",
      titulo: "Sweater Emily 04",
      imagen: "Imagenes/imagenes_producto_sweaters/4.jpg",
      categoria: {
        nombre: "Sweaters",
        id: "sweaters",
      },
      precio: 3800,
    },
    {
      id: "sweater-05",
      titulo: "Sweater Emily 05",
      imagen: "Imagenes/imagenes_producto_sweaters/5.jpg",
      categoria: {
        nombre: "Sweaters",
        id: "sweaters",
      },
      precio: 3800,
    },
    {
      id: "sweater-06",
      titulo: "Sweater Emily 06",
      imagen: "Imagenes/imagenes_producto_sweaters/6.jpg",
      categoria: {
        nombre: "Sweaters",
        id: "sweaters",
      },
      precio: 3800,
    },
    {
      id: "sweater-07",
      titulo: "Sweater Emily 07",
      imagen: "Imagenes/imagenes_producto_sweaters/7.jpg",
      categoria: {
        nombre: "Sweaters",
        id: "sweaters",
      },
      precio: 3800,
    },
    {
      id: "sweater-08",
      titulo: "Sweater Emily 08",
      imagen: "Imagenes/imagenes_producto_sweaters/8.jpg",
      categoria: {
        nombre: "Sweaters",
        id: "sweaters",
      },
      precio: 3800,
    },
    {
      id: "sweater-09",
      titulo: "Sweater Emily 09",
      imagen: "Imagenes/imagenes_producto_sweaters/9.jpg",
      categoria: {
        nombre: "Sweaters",
        id: "sweaters",
      },
      precio: 3800,
    },
    {
      id: "sweater-10",
      titulo: "Sweater Emily 10",
      imagen: "Imagenes/imagenes_producto_sweaters/10.jpg",
      categoria: {
        nombre: "Sweaters",
        id: "sweaters",
      },
      precio: 3800,
    },
    {
      id: "vestidos-01",
      titulo: "Vestidos Emily 01",
      imagen: "Imagenes/imagenes_producto_vestidosyfaldas/1.jpg",
      categoria: {
        nombre: "Vestidos y Faldas",
        id: "vestidos",
      },
      precio: 3800,
    },
    {
      id: "vestidos-02",
      titulo: "Vestidos Emily 02",
      imagen: "Imagenes/imagenes_producto_vestidosyfaldas/2.jpg",
      categoria: {
        nombre: "Vestidos y Faldas",
        id: "vestidos",
      },
      precio: 3800,
    },
    {
      id: "vestidos-03",
      titulo: "Vestidos Emily 03",
      imagen: "Imagenes/imagenes_producto_vestidosyfaldas/3.jpg",
      categoria: {
        nombre: "Vestidos y Faldas",
        id: "vestidos",
      },
      precio: 3800,
    },
    {
      id: "vestidos-04",
      titulo: "Vestidos Emily 04",
      imagen: "Imagenes/imagenes_producto_vestidosyfaldas/4.jpg",
      categoria: {
        nombre: "Vestidos y Faldas",
        id: "vestidos",
      },
      precio: 3800,
    },
    {
      id: "vestidos-05",
      titulo: "Vestidos Emily 05",
      imagen: "Imagenes/imagenes_producto_vestidosyfaldas/5.jpg",
      categoria: {
        nombre: "Vestidos y Faldas",
        id: "vestidos",
      },
      precio: 3800,
    },
    {
      id: "vestidos-06",
      titulo: "Vestidos Emily 06",
      imagen: "Imagenes/imagenes_producto_vestidosyfaldas/6.jpg",
      categoria: {
        nombre: "Vestidos y Faldas",
        id: "vestidos",
      },
      precio: 3800,
    },
    {
      id: "vestidos-07",
      titulo: "Vestidos Emily 07",
      imagen: "Imagenes/imagenes_producto_vestidosyfaldas/7.jpg",
      categoria: {
        nombre: "Vestidos y Faldas",
        id: "vestidos",
      },
      precio: 3800,
    },
    {
      id: "vestidos-08",
      titulo: "Vestidos Emily 08",
      imagen: "Imagenes/imagenes_producto_vestidosyfaldas/8.jpg",
      categoria: {
        nombre: "Vestidos y Faldas",
        id: "vestidos",
      },
      precio: 3800,
    },
  ];