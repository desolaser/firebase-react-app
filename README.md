## Estus bar

This is a firebase react app example, i don't know if this app will do something.

## TODO

- Role: Admin, Client.
- Document types:
  - Tables (Admin)
    - id
    - number
    - seatings
  - Products (Admin)
    - id
    - name
    - price
  - Reservations (Admin, Client)
    - id
    - date
    - time
    - table { id, number, seatings }
    - order { id, address, phone, products, type }
    - uid
  - Orders (Admin, Client)
    - id
    - address
    - phone
    - products { id, name, price, quantity }
    - type
    - uid
- Hacer una landing page con temática de bar gamer.
    - Tiene un Hero
    - Sobre nosotros
    - Contact
- Hacer página con lista de reservaciones que has hecho.
- Hacer una página para crear resevaciones.
    - Formulario para añadir resevación.
    - Dentro de la reservación debe crearse una orden.
    - Formulario para añadir productos dentro de la reservación.
    - Pedir confirmación
    - Redirige a webpay falso
- Hacer página para detalle de la reservación.
- Hacer página con lista de ordenes que has hecho.
- Hacer una página para crear ordenes.
    - Formulario para añadir orden.
    - Formulario para añadir productos dentro de la orden.
    - Pedir confirmación.
    - Redirige a webpay falso.
    - Al terminar te manda al detalle de la orden.
- Hacer página para detalle de la orden.
