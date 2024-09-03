import java.time.LocalDate;

/**
 * This class is responsible for storing the expiration dates of products.
 * @author Ana Julia
 */
public class Batch {
    long id;
    long productId;
    LocalDate expireDate;
    LocalDate entryDate;

    /**
     * Creates an object of the class Batch
     * @param id
     * @param productId
     * @param expireDate
     * @param entryDate
     */
    public Batch (
        long id,
        long productId,
        LocalDate expireDate,
        LocalDate entryDate
    ) {
        this.id = id;
        this.productId = productId;
        this.expireDate = expireDate;
        this.entryDate = entryDate;
    }
}
