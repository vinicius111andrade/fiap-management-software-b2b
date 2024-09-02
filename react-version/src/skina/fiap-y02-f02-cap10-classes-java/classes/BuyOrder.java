import java.time.LocalDate;

/**
 * This class is responsible for storing the buy orders for all the products.
 * @author Ana Julia
 */
public class BuyOrder {
    long id;
    String name;
    LocalDate date;
    long userId;
    long productId;
    int quantity;

    /**
     * Creates an object of the class BuyOrder
     * @param id
     * @param name
     * @param date
     * @param userId
     * @param productId
     * @param quantity
     */
    public BuyOrder (
        long id,
        String name,
        LocalDate date,
        long userId,
        long productId,
        int quantity
    ){
        this.id = id;
        this.name = name;
        this.date = date;
        this.userId = userId;
        this.productId = productId;
        this.quantity = quantity;
    }
}
