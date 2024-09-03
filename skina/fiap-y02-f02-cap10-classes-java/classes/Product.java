/**
 * This class is responsible for storing all the information about a product.
 * @author Vinicius Andrade
 */
public class Product {
    long id;
    String name;
    String type;
    int quantity;
    float price;

    /**
     * Creates an object of the class Product
     * @param id
     * @param name
     * @param type
     * @param quantity
     * @param price
     */
    public Product(
        long id,
        String name,
        String type,
        int quantity,
        float price
        ) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.quantity = quantity;
        this.price = price;
    }

    /**
     * Add a quantity 'n' to the last quantity valeu and returns a new object.
     * @param n
     * @return Product
     */
    public Product add(int n) {
         return new Product(id, name, type, quantity + n, price);
      }

    /**
     * Subtracts a quantity 'n' to the last quantity valeu and returns a new object.
     * @param n
     * @return Product
     */
    public Product remove(int n) {
        return add(-n);
    }

     /**
     * Creates a product in the database.
     * @param id
     * @param name
     * @param type
     * @param quantity
     * @param price
     * @return Product
     */
    public Product create(
        long id,
        String name,
        String type,
        int quantity,
        float price
        ) {
        return new Product(id, name, type, quantity, price);
    }

    /**
     * Updates a product in the database.
     * @param id
     * @param name
     * @param type
     * @param quantity
     * @param price
     * @return Product
     */
    public Product update(
        long id,
        String name,
        String type,
        int quantity,
        float price
        ) {
        return new Product(id, name, type, quantity, price);
    }

    /**
     * Deletes a product from database and return true if successful, false otherwise.
     * @param id
     * @return boolean
     */
    public boolean delete(long id) {
        return true;
    }
}