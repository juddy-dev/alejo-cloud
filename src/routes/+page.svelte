<script>
    /* IMPORTS */
    import { onMount } from "svelte";
    import { Icon } from "svelte-icons-pack";
    import { FaBrandsSquareGithub, FaBrandsLinkedin } from "svelte-icons-pack/fa";
    import Item from "../components/Item.svelte";

    /* LOGIC */
    let theme = $state("dark");

    onMount(() => {
        applyTheme();
    });

    function applyTheme() {
        document.documentElement.classList.toggle("dark", theme === "dark");
    }

    function toggleTheme() {
        theme = theme === "light" ? "dark" : "light";
        localStorage.setItem("theme", theme);
        document.documentElement.classList.toggle("dark", theme === "dark");
    }

</script>

<style>
    .general-section {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .work {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .education {
        display: flex;
        flex-direction: column;
        gap: 4rem;
    }
</style>

<nav>
    <ul>
        <li>
            <button>
                <span class="material-symbols-outlined">home</span>
            </button>
        </li>


        <li>
            <button aria-label="linkedin button">
                <Icon src={FaBrandsSquareGithub} className="nav-icon" />
            </button>
        </li>


        <li>
            <button aria-label="github button">
                <Icon src={FaBrandsLinkedin} className="nav-icon" />
            </button>
        </li>


        <li>
            <button onclick={toggleTheme} aria-label="button theme-mode">
                {#if (theme == "light")}
                    <span class="material-symbols-outlined">dark_mode</span>
                {:else}
                    <span class="material-symbols-outlined">light_mode</span>
                {/if}
            </button>
        </li>
    </ul>
</nav>

<div class="container">
    <section class="hero">
        <div>
            <h1>Hola, Soy Alejo 👋</h1>
            <p>He liderado migraciones exitosas on-premise y en la nube, optimizando sistemas e infraestructura para mayor eficiencia y escalabilidad.</p>
        </div>
        <img src="/profile.svg" alt=""/>
    </section>
    <section class="about">
        <h3>Más allá de la nube</h3>
        <p>Cuento con habilidades de liderazgo y comunicación efectiva, lo que me permite trabajar con equipos multidisciplinarios y alinear soluciones técnicas con las necesidades del negocio. Tengo un enfoque estratégico y resolutivo, adaptándome a los cambios tecnológicos para diseñar infraestructuras escalables y eficientes.</p>    
    </section>
    <section class="work">
        <h3>Mi trabajo</h3>

        <Item date="Oct 2021 - actualidad" 
                picture="https://media.licdn.com/dms/image/v2/C4E0BAQFypsb1Ke2ARg/company-logo_100_100/company-logo_100_100/0/1631366537945/banco_pichincha_ca_logo?e=1748476800&v=beta&t=1nK3_RowVaBsIWPgzTml9fS4ZnnaCXgAOiPuaEMQxvQ"
                title="Ingeniero Cloud"
                subtitle="Banco Pichincha"
            />

        <Item date="Jun 2020 - Jun 2021" 
                picture="https://media.licdn.com/dms/image/v2/D4E0BAQFxoLrcvAz8qA/company-logo_100_100/company-logo_100_100/0/1697647868407/nequi_logo?e=1748476800&v=beta&t=FXiApflj6SaaZAb8MLSppZxfDb-sM4JqGH5l-MULbVc"
                title="Ingeniero Cloud"
                subtitle="Nequi"
            />

        <Item date="Jun 2019 - Jun 2020" 
                picture="https://media.licdn.com/dms/image/v2/C4E0BAQHl8X6uU5aSwQ/company-logo_100_100/company-logo_100_100/0/1630641994231/bancolombia_logo?e=1748476800&v=beta&t=Tr5ioAz9PH35Kh-cJ6H-iivEKsdOrN3KdmfW6py2opM"
                title="Ingeniero Cloud"
                subtitle="Bancolombia"
            />

        <Item date="Abr 2019 - Jun 2019" 
                picture="https://media.licdn.com/dms/image/v2/D4E0BAQE587T-fI_MdA/company-logo_100_100/company-logo_100_100/0/1683832574398/ceibasoftware_logo?e=1748476800&v=beta&t=MRbSwEJV5dxGUnOwuZoipzQAoAajkAgGCnMfdwWnbZ0"
                title="Arquitecto desarrollador"
                subtitle="Ceiba Software"
            />

        <Item date="Jun 2018 - Mar 2019" 
                picture="https://media.licdn.com/dms/image/v2/C560BAQGgpdtBbGHT9A/company-logo_100_100/company-logo_100_100/0/1630666856311/quipux_logo?e=1748476800&v=beta&t=1Oph9RqLDcSVolqmExIj0bYDfpsuEEWBwEr3Mp7juyg"
                title="Ingeniero de software"
                subtitle="Quipux"
            />

        <Item date="Dic 2016 - Sept 2017" 
         
                title="Ingeniero de mecatrónica"
                subtitle="Vestimundo S.A"
            />

        <Item date="Jun 2016 - Dic 2016" 
         
                title="Practicante de mecatrónica"
                subtitle="Crystal S.A.S"
            />
        
    </section>
    <div class="education">

    <section class="about">
        <h3>Skills</h3>
        <div class="skills">
            <span>AWS</span>
            <span>Microsoft Azure</span>
            <span>GCP</span>
        </div>
    </section>
        <section class="general-section">
            <h3>Mis certificaciones</h3>
            <Item date="Feb 2022 - Feb 2025" 
                picture="https://media.licdn.com/dms/image/v2/D4E0BAQE0fp2sCqnVLg/company-logo_100_100/company-logo_100_100/0/1738855736997/amazon_web_services_logo?e=1748476800&v=beta&t=pfdQMeP_M9FIaE6nvquhHOHxsMujZjqdhSBZPOlX4A4" 
                title="AWS Certified Solutions Architect - Associate"
                subtitle="Amazon Web Services (AWS)"
            />
            
        </section>

        <section class="general-section">
            <h3>Mi educación</h3>
            <Item date="2011 - 2017" 
                picture="https://media.licdn.com/dms/image/v2/C4E0BAQEXFU6ObS2Nzw/company-logo_100_100/company-logo_100_100/0/1651332306878/udea__logo?e=1748476800&v=beta&t=cPZu8Fn-m4tMTNq9yX6cjlTTvDLHGAEkioVm69k-8t0" 
                title="Ingeniero Electrónico"
                subtitle="Universidad de Antioquia"
            />
            
        </section>
    
    </div>

</div>