export function mobilesAPIToModel(mobilesAPI) {
  return mobilesAPI.map(data => {
    return {
      id: data.id,
      image: data.url,
      title: data.title,
      alt: `Modelo de móvil: ${data.title}`,
      description: data.description,
      colors: `Colores disponibles: ${data.colors}`,
      price: `${data.price} €`
    }
  })
}
