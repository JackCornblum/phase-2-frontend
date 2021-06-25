import photo from './screenshot.png'

function Home() {
    document.title = "Meal Planner App | Home";
    return (
      <div id="home">
        <h2>Welcome to Meal Planner App!</h2>
        <p>To get started, head over to the Planner tab and add your meals for the week.</p>
        <p>Once you've added your meals, head over to the Shopping List tab to plan your grocery run.</p>
        <img id="screenshot" src={photo} alt="screenshot" />
      </div>  
    );
}

export default Home;