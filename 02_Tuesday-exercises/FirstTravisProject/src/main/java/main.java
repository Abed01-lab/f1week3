
import entities.Movie;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author abed
 */
public class main {
    private static final EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu");
    public static void main(String[] args) {
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
}
