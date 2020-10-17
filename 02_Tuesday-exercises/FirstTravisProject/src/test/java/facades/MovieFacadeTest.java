package facades;

import DTO.MovieDTO;
import utils.EMF_Creator;
import entities.Movie;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

//Uncomment the line below, to temporarily disable this test
//@Disabled
public class MovieFacadeTest {

    private static EntityManagerFactory emf;
    private static MovieFacade facade;

    public MovieFacadeTest() {
    }

    @BeforeAll
    public static void setUpClass() {
       emf = EMF_Creator.createEntityManagerFactoryForTest();
       facade = MovieFacade.getFacadeExample(emf);
    }

    @AfterAll
    public static void tearDownClass() {
//        Clean up database after test is done or use a persistence unit with drop-and-create to start up clean on every test
        EntityManager em = emf.createEntityManager();
        em.getTransaction().begin();
        em.createNamedQuery("Movie.deleteAllRows").executeUpdate();
        em.createNativeQuery("ALTER TABLE `MOVIE` AUTO_INCREMENT = 1").executeUpdate();
    }

    // Setup the DataBase in a known state BEFORE EACH TEST
    //TODO -- Make sure to change the script below to use YOUR OWN entity class
    @BeforeEach
    public void setUp() {
        EntityManager em = emf.createEntityManager();
        try {
            em.getTransaction().begin();
            em.createNamedQuery("Movie.deleteAllRows").executeUpdate();
            em.persist(new Movie(2008, "Iron Man", new String[]{"Robert Downey Jr.", "Jon Favreau", "Gwyneth Paltrow"}));
            em.persist(new Movie(2010, "Iron Man 2", new String[]{"Robert Downey Jr.", "Jon Favreau", "Gwyneth Paltrow"}));
            em.persist(new Movie(2013, "Iron Man 3", new String[]{"Robert Downey Jr.", "Jon Favreau", "Gwyneth Paltrow", "Guy Pearce", "Ben Kingsley"}));
            em.getTransaction().commit();
            
        } finally {
            em.close();
        }
    }

    @AfterEach
    public void tearDown() {
//      Remove any data after each test was run
        EntityManager em = emf.createEntityManager();
        em.getTransaction().begin();
        em.createNamedQuery("Movie.deleteAllRows").executeUpdate();
        em.createNativeQuery("ALTER TABLE `MOVIE` AUTO_INCREMENT = 1").executeUpdate();
    }

    // TODO: Delete or change this method 
    @Test
    public void getAllMoviesTest() {
        assertEquals(3, facade.getAllMovies().size(), "Expects two rows in the database");
    }
    
    @Test
    public void getMovieByTitleTest(){
        MovieDTO m = facade.addMovie(new Movie(2008, "Iron Man", new String[]{"Robert Downey Jr.", "Jon Favreau", "Gwyneth Paltrow"}));
        assertEquals(2, facade.getMovieByTitle(m.getTitle()).size(), "Expected two rows with the same title");
    }
    
    @Test
    public void addMovieTest(){
        assertNotNull(facade.addMovie(new Movie(2008, "Iron Man", new String[]{"Robert Downey Jr.", "Jon Favreau", "Gwyneth Paltrow"})));
    }
    
    @Test 
    public void getMovieByIdTest(){
        assertEquals(1, facade.getMovieById(1).getId());
    }

}
