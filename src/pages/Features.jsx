import { NavLink, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";

const Features = () => {
  const navigate = useNavigate();
  const features = [
    {
      title: "Real-Time Collaborative Coding",
      description:
        "Multiple users can write and edit code simultaneously with instant synchronization using Socket.IO.",
    },
    {
      title: "Docker-Based Secure Execution",
      description:
        "User code is executed inside isolated Docker containers to ensure secure and sandboxed runtime execution.",
    },
    {
      title: "Multi-Language Support",
      description:
        "Supports execution of multiple programming languages including JavaScript and Python.",
    },
    {
      title: "Live Cursor Tracking",
      description:
        "Track connected users' cursor positions in real time for better collaborative coding experience.",
    },
    {
      title: "Resource-Limited Execution",
      description:
        "Docker containers are configured with CPU and memory limits to prevent system abuse and overload.",
    },
    {
      title: "Temporary File Management",
      description:
        "Source code files are automatically generated and deleted after execution to maintain clean runtime environment.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* NAVBAR */}

      <Nav />

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
            Advanced Features for
            <span className="text-blue-600"> Collaborative Coding</span>
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            CodeCollab provides a reliable and efficient platform for
            developers, students, and teams to collaborate in real-time with
            seamless room management and synchronized coding experience.
          </p>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-md transition duration-300"
            >
              {/* TOP LINE */}
              <div className="w-14 h-1 bg-blue-600 rounded-full mb-6"></div>

              {/* TITLE */}
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {feature.title}
              </h2>

              {/* DESCRIPTION */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-white border-y">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div>
              <h2 className="text-5xl font-bold text-blue-600 mb-3">99%</h2>

              <p className="text-gray-600 text-lg">
                Real-Time Synchronization Accuracy
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-blue-600 mb-3">24/7</h2>

              <p className="text-gray-600 text-lg">
                Collaborative Room Availability
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-blue-600 mb-3">100+</h2>

              <p className="text-gray-600 text-lg">
                Simultaneous Collaboration Sessions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Designed for Modern Development Teams
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Whether you are building academic projects, conducting technical
          interviews, or collaborating on production-level applications,
          CodeCollab delivers a streamlined and productive coding experience.
        </p>

        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-lg font-semibold text-lg"
        >
          Start Collaborating
        </button>
      </section>
    </div>
  );
};

export default Features;
