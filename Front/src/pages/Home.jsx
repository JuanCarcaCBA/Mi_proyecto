import React from 'react'
import styles from './Home.module.css'


export default function Home(){
return (
<section className={styles.home}>
<div className="p-4 bg-white rounded shadow-sm">
<h1 className="mb-2">🤖 Ingeniería y Eficiencia: IA Aplicada a la Vida Diaria</h1>
<p className="mb-0">Vivimos rodeados de tecnología, pero lo importante no es cuánto usamos, sino cómo la usamos. Como Ingeniero en Sistemas, mi foco está en la eficiencia y la automatización (con Power Automate, Python, etc.). Hoy, la Inteligencia Artificial es la herramienta clave para llevar el bienestar, la productividad y mis pasiones al siguiente nivel. Acá comparto cómo aplicar soluciones de IA y automatización en el día a día.</p>
</div>

        <h2 class="subtitulo-seccion icono-organizacion">
            🧭 Organización Personal y Profesional con IA
        </h2>
        <ul>
            <li>
                <strong>El desafío:</strong> No solo registrar, sino <strong>priorizar</strong> automáticamente. Utilizo scripts en <span class="tag">Python</span> para analizar la urgencia de tareas en <span class="tag">Jira</span> o <span class="tag">Trello</span>.
            </li>
            <li>
                <strong>IA Generativa:</strong> Uso IA para resumir notas largas de <span class="tag">Notion</span> o <span class="tag">Evernote</span> en puntos de acción clave, eliminando la lectura manual.
            </li>
        </ul>
        <p><em class="resultado">🎯 Resultado:</em> Más foco, menos carga mental y **priorización asistida por algoritmos**.</p>

        <h2 class="subtitulo-seccion icono-habitos">🧠 Hábitos y Foco Predictivo</h2>
        <ul>
            <li>
                <strong>Constancia Inteligente:</strong> La IA predice cuándo es probable que rompa un hábito (basándose en mis datos y calendario) para enviar un recordatorio preciso vía un flujo de <span class="tag">Power Automate</span>, solo cuando es necesario.
            </li>
            <li>
                <strong>Herramientas:</strong> <span class="tag">Forest</span> y <span class="tag">Focus To-Do</span> para bloques de concentración asistida.
            </li>
        </ul>
        <p><em class="resultado">🎯 Resultado:</em> Constancia sin rigidez y **motivación predictiva**.</p>

        <h2 class="subtitulo-seccion icono-deporte">🏃‍♂️ Deporte y Salud Basada en Datos</h2>
        <ul>
            <li>
                <strong>Analítica de Rendimiento:</strong> Con scripts en <span class="tag">Python</span>, analizo métricas de <span class="tag">Strava</span> y <span class="tag">Google Fit</span> para transformar datos brutos en decisiones estratégicas de entrenamiento.
            </li>
            <li>
                <strong>Optimización:</strong> La IA recomienda rutinas específicas de <span class="tag">YouTube</span> cuando no puedo ir al club, basadas en mi fatiga real y metas.
            </li>
        </ul>
        <p><em class="resultado">🎯 Resultado:</em> Más movimiento, **rutinas optimizadas por datos** y sin excusas.</p>

        <h2 class="subtitulo-seccion icono-tiempo-libre">
            🎧 Tiempo Libre con Intención y Filtrado Inteligente
        </h2>
        <ul>
            <li>
                <strong>Filtro de Contenido:</strong> La IA filtra automáticamente <span class="tag">Podcasts</span> o artículos de <span class="tag">Kindle App</span> enfocados en mis proyectos de <span class="tag">JavaScript</span> o <span class="tag">SAP HCM</span>.
            </li>
            <li>
                <strong>Pasiones:</strong> Sigo mis pasiones con apps como <span class="tag">FIFA Tracker</span>, manteniendo un equilibrio estratégico.
            </li>
        </ul>
        <p><em class="resultado">🎯 Resultado:</em> Disfruto mejor mi tiempo libre, convirtiendo el ocio en **inversión de aprendizaje**.</p>

        <h2 class="subtitulo-seccion icono-automatizacion">
            🛠️ Automatización Diaria al Nivel de Liderazgo
        </h2>
        <ul>
            <li>
                <strong>Flujos Inteligentes:</strong> Uso <span class="tag">Power Automate</span> y <span class="tag">Google Scripts</span> para crear flujos que clasifican y responden a correos electrónicos complejos o interactúan con plataformas web.
            </li>
            <li>
                <strong>Escalabilidad:</strong> La meta es eliminar el 80% de las tareas repetitivas, usando **IA para la toma de decisiones** dentro de mis flujos de automatización.
            </li>
        </ul>
        <p>
            <em class="resultado">🎯 Resultado:</em> Ahorro tiempo y **escalo mi impacto**, dedicando la energía a lo que solo el liderazgo puede resolver.
        </p>

        <h2 class="subtitulo-seccion icono-vos">✍️ ¿Y vos?</h2>
        <p>
            La IA y la automatización no son el futuro, son las herramientas de eficiencia del presente. Una app o un pequeño hábito potenciado por datos puede ayudarte a organizarte, avanzar y sentirte mejor. ¡La clave está en encontrar lo que se adapte a tu vida en Córdoba y en tu perfil técnico!
        </p>
</section>
)
}