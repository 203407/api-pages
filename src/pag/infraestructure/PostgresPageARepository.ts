import { pool } from "../../database";
import { PageARepository } from "../domain/UsuarioRepository";
import { PageA } from "../domain/pagesA";


export class PostgresPageARepository implements PageARepository {  

  async createPage(pageA: PageA): Promise<PageA | null | boolean> {              
          const sql =
            "INSERT INTO pagesa (id,nombre,url) VALUES ($1, $2, $3) RETURNING *";
          const values = [
            pageA.id,
            pageA.nombre,          
            pageA.url,          
          ];
          
          try {
            const result = await pool.query(sql, values);

            if (result.rows.length > 0) {                          
              return true;
            }

            return null;
          } catch (error) {            
            throw error;
          }
    
  }


  async getPagesA(): Promise<PageA[] | null> {
    const sql = "SELECT * FROM pagesa";

    try {
      const result = await pool.query(sql);
      const psicologos: PageA[] = result.rows.map((pageAData: any) => ({
        id: pageAData.id,
        nombre: pageAData.nombre,
        url: pageAData.url,       
      }));
      return psicologos;
      
    } catch (error) {
      throw error;
    }
  }
}
