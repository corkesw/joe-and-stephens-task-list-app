function Footer ({view, setView}) {
    const toggleView = () => {
        if (view === 'light'){
            setView('dark')
        } else {
            setView('light')
        }
    }

    return <section>
        <label className="switch">
  <input onChange={toggleView} type="checkbox" />
  <span className="slider round"></span>
</label>
    </section>
}

export default Footer;