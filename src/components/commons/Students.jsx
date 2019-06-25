import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import serialize from "form-serialize";

import { useDispatch, useSelector } from "react-redux";
import { studentsRequest, createStudent } from "../../state/Actions";


const Students = React.memo(() => {
    const dispatch = useDispatch();
    const { students, token } = useSelector(state => state.ACCOUNT_REDUCER);

    const handleSubmit = evt => {
        evt.preventDefault();
        const form = serialize(evt.target, { hash: true });
        dispatch(createStudent(form, token));
      };
    
      useEffect(() => {
        dispatch(studentsRequest(token));
      }, []);


return(
  <main className="students">
    <ul>
      <h1 className="students__title">Estudiantes</h1>
        {students &&
          students.map(student => (
            <li key={student.id} className="students-list__item">
              <div className="students-list__title">
                <Link to={`/student/${student.id}`}>
                  {student.id} - {student.name}
                </Link>
              </div>
            </li>
          ))}
      </ul>

      <div className="students__form">
        <form className="home__form " onSubmit={handleSubmit}>
          <h1 className="home__title">Crear Estudiante</h1>
          <label>
            Nombre:
            <input name="name" type="text" placeholder="Nombre" required />
          </label>
          <label>
            Apellido:
            <input
              name="lastName"
              type="text"
              placeholder="Apellido"
              required
            />
          </label>
          <label>
            Email:
            <input name="email" type="email" placeholder="Email" required />
          </label>
          <label>
            Telefono:
            <input
              name="phoneNumber"
              type="tel"
              placeholder="Telefono"
              required
            />
          </label>

          <button className="home__submit" type="submit">
            Crear
          </button>
        </form>
      </div>
  </main>

    )
})

export default Students;