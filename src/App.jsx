import ProfileCard from "./profileCard"

function App() {

  return (
    <>
      <section className="hero is-dark">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard 
                title="Alexa"
                handle="@alexa24"
                image="data:image/png;base64,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"
                
              />
            </div>
            <div className="column is-4">
              <ProfileCard />
            </div>
            <div className="column is-4">
              <ProfileCard />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
