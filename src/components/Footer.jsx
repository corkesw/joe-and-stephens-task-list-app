function Footer ({view, setView}) {
    const toggleView = () => {
        if (view === 'light'){
            setView('dark')
        } else {
            setView('light')
        }
    }

    return <section>
        <label class="switch">
  <input onChange={toggleView} type="checkbox" />
  <span class="slider round"></span>
</label>
    </section>
}

export default Footer;