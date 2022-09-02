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
                    <input type="text" className="nombre-victima" placeholder="Nombre completo de la victima directa"/>
                    <input type="text" className="relacion-victima" placeholder="Relación con la victima directa"/>
                </div>
            </div>
            <div className="primer-bloque">
                <div className="bloque-arriba">
                    <label className="titulo-identificacion">¿Cuentas con identificación?</label>
                    <input className="id-true" type="checkbox"/>
                </div>      
                <div className="bloque-identificacion">
                    <select className="identificion">
                        <option selected disabled="">Selecciona la identificación que se adjuntará</option> 
                        <option value="Cartilla">Cartilla del servicio militar</option>
                        <option value="Pasaporte">Pasaporte</option>
                        <option value="Cédula profesional ">Cédula profesional </option>
                        <option value="medica">Credencial oficial expedida por el IMSS o ISSSTE</option>
                        <option value="constancia de estudios">constancia de estudios</option>
                        <option value="Constancia de residencia expedida por autoridad local">Constancia de residencia expedida por autoridad local</option>
                        <option value="Tarjeta de residencia tempora">Tarjeta de residencia tempora</option>
                        <option value="Tarjeta de residencia permanente">Tarjeta de residencia permanente</option>
                        <option value="INE">Credencial de elector</option>
                    </select>
                    <button className="adju-id" type="submit">📎</button>
                </div>
            </div>
            <div className="sub-topbar">
                <h3>V. LUGAR Y FECHA DE LOS HECHOS</h3>
            </div>
            <div className="primer-bloque">
                <div className="bloque-ubicacion">
                    <input type="text" className="data-place" id="calle" placeholder="Calle"/>
                    <input type="text" className="data-place" id="nExterior" placeholder="N° exterior"/>
                    <input type="text" className="data-place" id="nInterior" placeholder="N° interior"/>
                    <input type="text" className="data-place" id="CP" placeholder="Código postal"/>
                    <input type="text" className="data-place" id="colonia" placeholder="Colonia"/>
                    <input type="text" className="data-place" id="localidad" placeholder="Localidad"/>
                    <input type="text" className="data-place" id="municipio" placeholder="Delegación o Municipio"/>
                    <input type="text" className="data-place" id="entFederativa" placeholder="Entidad federativa"/>
                    <input type="datatime" className="data-place" id="fecha" placeholder="Fecha"/>
                </div>
            </div>
            <div className="sub-topbar">
                <h3>RELATO DE LOS HECHOS</h3>
            </div>
            <div className="primer-bloque">
                <div className="bloque-arriba">
                    <label className="titulo-relato">Por favor relate las circunstancias de modo, tiempo y lugar, antes, durante y después de los hechos victimizantes. En caso de contar con alguna constancia o documento ministerial, jurisdiccional o de organismos nacionales o internacionales de derechos humanos en donde se dé cuenta del mismo, anexarlo al presente formato. En caso de que los hechos victimizantes atenten contra derechos colectivos, favor de referirlo</label>
                </div>      
                <div className="bloque-relato">
                    <input type="text" className="relato" placeholder=""/>
                </div>
            </div>
        </div>
    );
    
}

export default Pagina2;