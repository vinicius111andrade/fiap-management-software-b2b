/**
 * This class is responsible for storing all the information about a user.
 * @author Vitória Lana
 */
public class User {
    long id;
    String name;
    int userTypeId;

    /**
     * Creates an object of the class User
     * @param id
     * @param name
     * @param userTypeId
     */
    public User(int id, String name, int userTypeId) {
        this.id = id;
        this.name = name;
        this.userTypeId = userTypeId;
    }

    /**
     * Updates the user on the database.
     * @param name
     * @param userTypeId
     */
    public void update(String name, int userTypeId) {
        this.name = name;
        this.userTypeId = userTypeId;
    }

    /**
     * Activates an user and add permission to make inputs.
     * @return boolean
     */
    public boolean activate() {
        return true;
    }

    /**
     * Inactivates an user and removes its permission to make inputs.
     * @return boolean
     */
    public boolean inactivate() {
        return true;
    }
}
