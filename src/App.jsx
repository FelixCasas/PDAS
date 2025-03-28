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
