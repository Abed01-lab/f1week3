package facades;

import entities.Movie;
import DTO.MovieDTO;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;
import javax.persistence.TypedQuery;

/**
 *
 * Rename Class to a relevant name Add add relevant facade methods
 */
public class MovieFacade {

    private static MovieFacade instance;
    private static EntityManagerFactory emf;
    
    //Private Constructor to ensure Singleton
    private MovieFacade() {}
    
    
    /**
     * 
     * @param _emf
     * @return an instance of this facade class.
     */
    public static MovieFacade getFacadeExample(EntityManagerFactory _emf) {
        if (instance == null) {
            emf = _emf;
            instance = new MovieFacade();
        }
        return instance;
    }

    private EntityManager getEntityManager() {
        return emf.createEntityManager();
    }
    
    //TODO Remove/Change this before use
    public MovieDTO addMovie(Movie movie){
        EntityManager em = getEntityManager();
        try {
            em.getTransaction().begin();
            em.persist(movie);
            em.getTransaction().commit();
            return new MovieDTO(movie);
        } finally {
            em.close();
        }
    }
    
    public MovieDTO getMovieById(int id){
        EntityManager em = getEntityManager();
        try {
            em.getTransaction().begin();
            Movie movie = em.find(Movie.class, id);
            em.getTransaction().commit();
            return new MovieDTO(movie);
        } finally {
            em.close();
        }
    }
    
    public List<MovieDTO> getAllMovies(){
        EntityManager em = getEntityManager();
        TypedQuery<Movie> query =  em.createNamedQuery("Movie.getAll", Movie.class);
        List<MovieDTO> movies = new ArrayList();
        for(Movie m : query.getResultList()){
            movies.add(new MovieDTO(m));
        }
        return movies;
    }
    
    public List<MovieDTO> getMovieByTitle(String title){
        EntityManager em = getEntityManager();
        TypedQuery<Movie> query =  em.createNamedQuery("Movie.getByTitle", Movie.class);
        query.setParameter("arg", title);
        List<MovieDTO> movies = new ArrayList();
        for(Movie m : query.getResultList()){
            movies.add(new MovieDTO(m));
        }
        return movies;   
    }

}
