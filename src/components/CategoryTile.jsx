export default function CategoryTile({ name, image }) {
    return (
      <>
        <div>
          <h3>{name}</h3>
          <img src={image} alt={name} />
        </div>
      </>
    );
  }
  
  function CategoryList() {
    return (
      <>
        <CategoryTile name="Breakfast" image="./breakfast.jpg" />
        <CategoryTile name="Lunch" image="./lunch.jpg" />
        <CategoryTile name="Drinks" image="./drinks.jpg" />
        <CategoryTile name="Pastas" image="./pastas.jpg" />
        <CategoryTile name="Salads" image="./salads.jpg" />
        <CategoryTile name="Desserts" image="./desserts.jpg" />
        <CategoryTile name="Soups" image="./soups.jpg" />
      </>
    );
  }
  