import { NavLink, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* NAVBAR */}
      <Nav />

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-8">
            About
            <span className="text-blue-600"> CodeCollab</span>
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            CodeCollab is a real-time collaborative coding platform developed to
            simplify communication and teamwork among developers, students, and
            project teams. The platform enables multiple users to work on the
            same codebase simultaneously through synchronized coding rooms.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            The project focuses on delivering a clean, responsive, and efficient
            coding environment that improves collaboration, productivity, and
            learning experience during development sessions.
          </p>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="bg-white border-y">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                The primary objective of CodeCollab is to provide an accessible
                and reliable platform for collaborative programming. The system
                is designed to support real-time interaction between multiple
                users without unnecessary complexity.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                By combining modern web technologies with efficient real-time
                communication, the platform aims to enhance coding teamwork in
                academic and professional environments.
              </p>
            </div>

            {/* RIGHT */}
            <div className="bg-[#f8fafc] border rounded-2xl p-10">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  Real-Time Communication
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Instant synchronization allows users to collaborate without
                  delays or manual refreshes.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  Scalable Architecture
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Built using modern frontend and backend technologies to ensure
                  performance and scalability.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  User-Centered Design
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Focused on delivering a clean and distraction-free coding
                  experience for all users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Technologies Used
          </h2>

          <p className="text-lg text-gray-600">
            CodeCollab is developed using modern web development technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-white border rounded-2xl p-8 text-center shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              React.js
            </h3>

            <p className="text-gray-600">
              Frontend user interface development.
            </p>
          </div>

          <div className="bg-white border rounded-2xl p-8 text-center shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Node.js
            </h3>

            <p className="text-gray-600">
              Backend server-side runtime environment.
            </p>
          </div>

          <div className="bg-white border rounded-2xl p-8 text-center shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Socket.IO
            </h3>

            <p className="text-gray-600">
              Real-time collaborative communication.
            </p>
          </div>

          <div className="bg-white border rounded-2xl p-8 text-center shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Docker
            </h3>

            <p className="text-gray-600">
              Secure container-based code execution.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <section className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Built for Collaborative Development
          </h2>

          <p className="text-blue-100 text-lg leading-relaxed max-w-3xl mx-auto mb-10">
            CodeCollab demonstrates how modern technologies can be combined to
            create efficient and scalable real-time collaboration systems for
            developers and learners.
          </p>

          <button
            onClick={() => navigate("/features")}
            className="bg-white text-blue-600 hover:bg-gray-100 transition px-8 py-4 rounded-lg font-semibold text-lg"
          >
            Explore Features
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
