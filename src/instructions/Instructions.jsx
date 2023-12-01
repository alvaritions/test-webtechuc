import './Instructions.css';

export default function Instructions() {
  return (
    <div className="instructions-box">
      <p>
        La aplicación web "UChat" tiene la finalidad de solventar las dudas
        o sugerir a los usuarios información sobre los ramos de la universidad
        filtrando por código de curso, major y minor. <br />
        <br />
        <br />
        Diseño de la página web<br />
        El diseño de la aplicación web es simple para evitar sobresaturación
        de la vista del cliente consumidor y práctico para satisfacer
        la necesidad del cliente en menor tiempo.
        Al ingresar a la página web, se encuentra inicialmente en la
        página principal donde se muestra el logo, frase resumen
        y una imagen referencial.
        <br />
        <br />
        La aplicación web contiene 5 páginas, que son:<br />
        - 1° PÁGINA: Parte superior el logo, frase e imagen.
        En la parte central: Quiénes somos, finalidad de la aplicación.<br />
        - 2" PÁGINA: Clasificación de Ramos por majors e minors.<br />
        - 3° PÁGINA: Chat privado anónimo sobre consultas.<br />
        - 4° PÁGINA: Preguntas frecuentes de usuarios.<br />
        - 5° PÁGINA: Soporte técnico, con referencias de número de teléfono
        o correo electrónico en caso de emergencia o la ocurrencia
        de un problema en el sistema.<br />
      </p>
    </div>
  );
}
