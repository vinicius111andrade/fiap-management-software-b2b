/**
 * This Class is responsible for restoring Supplier infos
 * @author Rodrigo Calado
 */
public class Supplier {
    Long id;
    String name;
    String address;
    String phone;

    /**
    * Creates an object of the class Supplier
    * @author Rodrigo Calado
    * @param id
    * @param name
    * @param address
    * @param phone
    * @return Supplier
    */
    public Supplier(
        long id,
        String name,
        String address,
        String phone
        ) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.phone = phone;
    }

    /**
    * Creates an object of the class Supplier
    * @author Rodrigo Calado
    * @param name
    * @param address
    * @param phone
    * @return Supplier
    */
    public Supplier(
        String name,
        String address,
        String phone
        ) {
        this.name = name;
        this.address = address;
        this.phone = phone;
    }

    /**
    * Creates a Supplier in DataBase
    * @author Rodrigo Calado
    * @param name
    * @param address
    * @param phone
    * @return Supplier
    */
    public Supplier create(String name,
    String address,
    String phone)
    {
        return new Supplier(name, address, phone);
    }

    /**
    * Updates a Supplier in DataBase
    * @author Rodrigo Calado
    * @param id
    * @param name
    * @param address
    * @param phone
    * @return Supplier
    */
    public Supplier update(
        long Id,
        String name,
        String address,
        String phone
    )
    {
        return new Supplier(Id, name, address, phone);
    }

    /**
    * Deletes a Supplier in DataBase
    * @author Rodrigo Calado
    * @param id
    * @return boolean
    */
    public boolean delete(long id)
    {
        return true;
    }
}
