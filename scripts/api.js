const url = "https://run.mocky.io/v3/59306943-d9cb-4a55-af66-e8f3f34bdfe8";

function formOptions() {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const cities = data.cities;
      const course_types = data.course_type;

      const select_city = document.getElementById("city");
      const select_course = document.getElementById("course-type");

      cities.forEach((city) => {
        const option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        select_city.appendChild(option);
      });

      course_types.forEach((courseType) => {
        const option = document.createElement("option");
        option.value = courseType;
        option.textContent = courseType;
        select_course.appendChild(option);
      });
    });
}

formOptions();
