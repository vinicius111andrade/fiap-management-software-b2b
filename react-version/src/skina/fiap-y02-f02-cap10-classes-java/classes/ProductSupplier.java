/**
 * This Class is responsible for restoring ProductSupplier infos
 * @author Rodrigo Calado
 */
public class ProductSupplier {
    Long id;
    Long productId;
    Long supplierId;

    /**
    * Creates an object of the class ProductSupplier
    * @author Rodrigo Calado
    * @param id
    * @param productId
    * @param supplierId
    */
    public ProductSupplier(
        long id,
        long productId,
        long supplierId
        ) {
        this.id = id;
        this.productId = productId;
        this.supplierId = supplierId;
    }
}
