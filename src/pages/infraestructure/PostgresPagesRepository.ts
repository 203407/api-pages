import { pool } from "../../database";
import { Pages } from "../domain/pages";
import { PagesRepository } from "../domain/PagesRepository";

export class PostgresPagesRepository implements PagesRepository {
  async createPage(pages: Pages): Promise<Pages | null | boolean> {
    const sql =
      "INSERT INTO pages (id,mostclick,location,sexo,seccionmost,diasmost,namepage,fecha) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *";
    const values = [
      pages.id,
      pages.mostClick,
      pages.location,
      pages.sexo,
      pages.seccionMost,
      pages.diasMost,
      pages.namePage,
      pages.fecha,
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

  async getPagesByNombre(nombre: string): Promise<Pages[] | null> {
    const sql = "SELECT * FROM pages where namepage=$1";

    const values = [nombre];

    try {
      const result = await pool.query(sql, values);

      const pages: Pages[] = result.rows.map((pagesData: any) => ({
        id: pagesData.id,
        mostClick: pagesData.mostclick,
        location: pagesData.location,
        sexo: pagesData.sexo,
        seccionMost: pagesData.seccionmost,
        diasMost: pagesData.diasmost,
        namePage: pagesData.namepage,
        fecha: pagesData.fecha,
      }));

      return pages;
    } catch (error) {
      throw error;
    }
  }

  async getPagesByFecha(
    f1: string,
    f2: string,
    nombre: string
  ): Promise<Pages[] | null> {
    const sql =
      "SELECT * FROM pages WHERE namepage = $3 and (fecha >= $1 AND fecha <= $2)";
    const values = [f1, f2, nombre];

    try {
      const result = await pool.query(sql, values);

      const pages: Pages[] = result.rows.map((pagesData: any) => ({
        id: pagesData.id,
        mostClick: pagesData.mostclick,
        location: pagesData.location,
        sexo: pagesData.sexo,
        seccionMost: pagesData.seccionmost,
        diasMost: pagesData.diasmost,
        namePage: pagesData.namepage,
        fecha: pagesData.fecha,
      }));

      return pages;
    } catch (error) {
      throw error;
    }
  }
}
