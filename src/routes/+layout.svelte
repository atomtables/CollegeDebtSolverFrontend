<script>
    import "$lib/app.css";
    import SearchBox from "$lib/SearchBox.svelte";

    let searchRef;
</script>

<div class="navbar bg-neutral text-neutral-content fixed z-50 shadow-2xl">
    <div class="navbar-start">
        <div class="dropdown">
            <div tabindex="-1" role="button" class="btn btn-circle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h7"
                    />
                </svg>
            </div>
            <ul
                tabindex="-1"
                class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 text-secondary-content bg-secondary"
            >
                <li><a href="/">Homepage</a></li>
                <li><a href="/dashboard">Dashboard</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </div>
    </div>
    <div class="navbar-center">
        <a class="btn btn-ghost text-xl" href="/">CollegeDebtSolver</a>
    </div>
    <div class="navbar-end">
        <!--    Search Icon-->
        <SearchBox bind:searchRef />
        <button class="btn btn-ghost btn-circle">
            <span class="indicator">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    ><path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    /></svg
                >
                <span class="badge badge-xs badge-primary indicator-item"
                ></span>
            </span>
        </button>
    </div>
</div>
<div class="pb-[64px]"></div>

<div class="min-h-[calc(100vh-64px)]">
    <slot />
</div>

<footer class="footer p-10 bg-neutral text-neutral-content">
    <aside>
        <h1 class="bold text-2xl">CollegeDebtSolver</h1>
        <p>
            Created by Adithiya Venkatakrishnan, Nathaniel George, Alexander
            Poon, Arnav Daine
        </p>
        <p>A hackJPS 2024 Project</p>
    </aside>
</footer>
