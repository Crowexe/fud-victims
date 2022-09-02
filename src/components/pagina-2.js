import "./Formulario.css";

const Pagina2 = () => {

    return (
        <div>
             <div className="sub-topbar">
                <h3>III. RELACIÓN DE LA VÍCTIMA INDIRECTA CON LA VÍCTIMA DIRECTA</h3>
            </div>
            <div className="primer-bloque">
                <div className="bloque-arriba">
                    <label className="titulo-victima">En caso de ser víctima indirecta, proporcione nombre completo de la víctima directa</label>
                    <label className="titulo-relacion">¿Qué soy de la víctima directa?</label>
                </div>      
                <div className="bloque-abajo">
                    <button className="add" type="submit">+</button>
                    <input type="text" className="Nombre-victima" placeholder="Nombre completo de la victima directa"/>
                    <input type="text" className="relacion-victima" placeholder="Nombre completo de la victima directa"/>
                </div>

            </div>
            <div>
                <section>
                    <label for="Nombre">En caso de ser menor de edad, indique el nombre del tutor/a</label>
                    <input type="text" name="Nombre del tutor/a" id="Nombre" placeholder="Indique el nombre de tutor/a"/>
                    <label for="Contacto">Indique datos de contacto del tutor/a</label>
                    <input type="text" name="Datos de contacto de tutor/a" id="Datos de contacto" placeholder="Indique datos de contacto"/>
                </section>

                <label for="Adulto mayor">¿Eres adulto mayor?</label>

                <select name="Eres adulto mayor">
                    <option selected disabled="">Selecciona una opcion</option> 
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                </select>

                <section>
                    <label for="Situacion">¿Te encuentras en situacion de calle?</label>
                    <select name="Situacion">
                        <option selected disabled="">Selecciona una opcion</option> 
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                    </select>
                </section>

                <section>
                    <label for="Discapacidad">¿Tiene condicion de discapacidad?</label>
                    <select name="Discapacidad">
                        <option selected disabled="">Selecciona una opcion</option> 
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                    </select>
                </section>

                <section>
                    <label for="Tipo">Tipo de discapacidad</label>
                    <select name="Tipo">
                        <option selected disabled="">Selecciona una opcion</option> 
                        <option value="Fisica">Fisica</option>
                        <option value="Mental">Mental</option>
                        <option value="Auditiva">Auditiva</option>
                        <option value="Visual">Visual</option>
                        <option value="Intelectual">Intelectual</option>
                    </select>
                </section>

                <section>
                    <label for="Dependencia">Grado de dependencia</label>
                    <select name="Dependencia">
                        <option selected disabled="">Selecciona una opcion</option> 
                        <option value="Moderada">Moderada</option>
                        <option value="Severa">Severa</option>
                        <option value="Gran dependencia">Gran dependencia</option>
                    </select>
                </section>

                <section>
                    <label for="Migrante">¿Eres migrante?</label>
                    <select name="Migrante">
                        <option selected disabled="">Selecciona una opcion</option> 
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                    </select>
                </section>

                <section>
                    <label for="Migrante">Pais de origen</label>
                    <input type="text" name="Pais de origen" id="P origen" placeholder="Pais de origen"/>
                    <label for="Contacto">Pais de destino</label>
                    <input type="text" name="Pais de destino" id="P destino" placeholder="Pais de destino"/>
                </section>

                <section>
                    <label for="Traductor">¿Requiere de traductor?</label>
                    <select name="Traductor">
                        <option selected disabled="">Selecciona una opcion</option> 
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                    </select>
                </section>

                <section>
                    <label for="Comunidad">¿Pertenece a alguna comunidad indigena?</label>
                    <select name="Comunidad">
                        <option selected disabled="">Selecciona una opcion</option> 
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                    </select>
                </section>

                <section>
                    <label for="Comunidad">¿A que comunidad pertenece?</label>
                    <input type="text" name="comunidad" id="comunidad" placeholder="Indique a que comunidad pertenece"/>
                </section>
            </div>
        </div>
    );
    
}

export default Pagina2;