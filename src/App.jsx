import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, Code, Award, Briefcase, GraduationCap, ExternalLink, ChevronDown, Terminal, Cpu, Database, Brain } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const skills = {
    languages: ['Python', 'C++', 'JavaScript', 'Embedded C', 'Bash/Shell'],
    web: ['HTML', 'CSS', 'XML', 'TCP/IP', 'UDP', 'OSI Model'],
    aiml: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'MediaPipe', 'XGBoost'],
    cloud: ['Docker', 'Git/GitHub', 'Fast API', 'AWS/Azure'],
    tools: ['VS Code', 'Jupyter Notebook', 'MYSQL', 'SQL Server'],
    concepts: ['DSA', 'OOP', 'Machine Learning', 'DL Basics', 'IOT Systems']
  };

  const projects = [
    {
      title: 'Smart Assistive Glasses for Visually Impaired',
      subtitle: 'SightEchoV',
      period: 'April 2025 – Present',
      description: [
        'Developed OCR and TTS modules using Python & OpenCV for real-time feedback',
        'Integrated TTS libraries to provide seamless audio assistance',
        'Collaborated with hardware engineers to integrate camera and microcontroller components'
      ],
      tech: ['Python', 'OpenCV', 'Raspberry Pi/Arduino', 'Embedded C/C++', 'Linux OS', 'GIT'],
      icon: Brain
    },
    {
      title: 'AI-Based Lie Detector',
      subtitle: 'For Online Interviews',
      period: 'February 2025 – March 2025',
      description: [
        'Designed and built an AI-powered lie detection tool with 85%+ accuracy using facial and vocal stress analysis',
        'Enhanced system performance by enabling seamless live video and audio analysis',
        'Dual-modality input improved emotional signal reliability'
      ],
      tech: ['Python', 'OpenCV', 'NumPy', 'MediaPipe', 'PyAudio', 'Librosa', 'Scikit-learn', 'TensorFlow', 'Joblib'],
      icon: Cpu
    }
  ];

  const experience = {
    company: 'SoftPro India Pvt. Ltd',
    role: 'Intern – Machine Learning with Python',
    period: 'July 2025 – Sep 2025',
    tasks: [
      'Developed responsive web applications (HTML, CSS, JavaScript)',
      'Trained ML models (scikit-learn, NumPy, pandas)',
      'Wrote optimized SQL queries to fetch and manipulate data from relational databases'
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Python', 'Flask', 'MySQL', 'GitHub', 'Jupyter Notebook']
  };

  const education = [
    {
      institution: 'Shri Ram Murti Smarak College Of Engineering Technology',
      degree: 'B.Tech in Computer Science',
      period: 'August 2022 – Present',
      percentage: '81%',
      coursework: ['Software Engineering', 'Operating Systems', 'Database Management Systems', 'Computer Networks']
    },
    {
      institution: 'Radha Madhav Public School',
      degree: 'Intermediate (12th Grade), Science',
      period: '2019 – 2021',
      percentage: '87.2%',
      coursework: ['Physics', 'Chemistry', 'Mathematics']
    }
  ];

  const certificates = [
    { title: 'Published Research Paper', description: 'Implementation of Medical Health Assistance using Voice-Based System | National Conference', date: 'October 2025' },
    { title: 'NexHack 1.0 Participant', description: 'National Level Hackathon | IITM, Delhi', date: 'September 2025' },
    { title: 'Best Engineer Award', description: 'SRMS College of Engineering, Bareilly', date: 'September 2025' },
    { title: 'TechWhiz - 1st Prize', description: 'Technovaganza (Annual fest), SRMS', date: 'November 2023' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-slate-100 relative overflow-hidden font-sans">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <div 
          className="absolute w-96 h-96 bg-indigo-500 rounded-full blur-3xl"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: 'all 0.3s ease-out'
          }}
        />
      </div>

      {/* Grid overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-indigo-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            YG
          </div>
          <div className="flex gap-6">
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm hover:text-indigo-400 transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="max-w-7xl mx-auto px-6 text-center z-10">
          <h1 className='text-bold capitalize text-4xl'>Yash Garg</h1>
          <div className="inline-block mt-9 px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-300 text-sm animate-pulse">
            Available for Opportunities
          </div>
          <h1 className="text-7xl md:text-8xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              YASH GARG
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-slate-300 mb-4 font-light">
            SDE / AI-ML Engineer
          </p>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Building ethical AI solutions, scalable backend systems, and integrating ML models into real-world applications.
            Passionate about innovation in cutting-edge environments.
          </p>
          
          {/* Contact Icons */}
          <div className="flex justify-center gap-6 mb-12">
            <a href="https://github.com/yashgarg-29" target="_blank" rel="noopener noreferrer" 
               className="p-4 bg-slate-800/50 border border-indigo-500/30 rounded-xl hover:bg-indigo-500/20 hover:border-indigo-400 transition-all duration-300 hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/yash-garg-523710253" target="_blank" rel="noopener noreferrer"
               className="p-4 bg-slate-800/50 border border-indigo-500/30 rounded-xl hover:bg-indigo-500/20 hover:border-indigo-400 transition-all duration-300 hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:yashgarg932@gmail.com"
               className="p-4 bg-slate-800/50 border border-indigo-500/30 rounded-xl hover:bg-indigo-500/20 hover:border-indigo-400 transition-all duration-300 hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
            <a href="tel:904-504-1239"
               className="p-4 bg-slate-800/50 border border-indigo-500/30 rounded-xl hover:bg-indigo-500/20 hover:border-indigo-400 transition-all duration-300 hover:scale-110">
              <Phone className="w-6 h-6" />
            </a>
          </div>

          <a href="#about" className="inline-block animate-bounce">
            <ChevronDown className="w-8 h-8 text-indigo-400" />
          </a>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 animate-float">
          <Terminal className="w-12 h-12 text-indigo-500/30" />
        </div>
        <div className="absolute bottom-1/4 right-10 animate-float" style={{ animationDelay: '1s' }}>
          <Code className="w-16 h-16 text-purple-500/30" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20">
        <div className={`max-w-7xl mx-auto px-6 w-full transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="p-8 bg-slate-800/30 border border-indigo-500/20 rounded-2xl backdrop-blur-sm hover:border-indigo-400/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-indigo-400 mb-4 flex items-center gap-3">
                  <Brain className="w-6 h-6" />
                  Objective
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Aspiring SDE / AI-ML Intern with hands-on experience in Python, C++, Machine Learning, and IoT systems.
                  Passionate about building ethical AI solutions, scalable backend systems, and integrating ML models into
                  real-world applications. Seeking opportunities to grow in a cutting-edge, innovation-driven environment.
                </p>
              </div>

              <div className="p-8 bg-slate-800/30 border border-indigo-500/20 rounded-2xl backdrop-blur-sm hover:border-indigo-400/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-indigo-400 mb-4 flex items-center gap-3">
                  <GraduationCap className="w-6 h-6" />
                  Education
                </h3>
                {education.map((edu, idx) => (
                  <div key={idx} className={idx > 0 ? 'mt-6 pt-6 border-t border-slate-700' : ''}>
                    <h4 className="font-bold text-slate-200 mb-1">{edu.institution}</h4>
                    <p className="text-indigo-300 mb-1">{edu.degree}</p>
                    <p className="text-sm text-slate-400 mb-2">{edu.period} • {edu.percentage}</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, i) => (
                        <span key={i} className="text-xs px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-slate-800/30 border border-indigo-500/20 rounded-2xl backdrop-blur-sm hover:border-indigo-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-indigo-400 mb-4 flex items-center gap-3">
                <Award className="w-6 h-6" />
                Achievements
              </h3>
              <div className="space-y-4">
                {certificates.map((cert, idx) => (
                  <div key={idx} className="p-4 bg-slate-900/50 rounded-xl border border-slate-700 hover:border-indigo-500/50 transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-slate-200">{cert.title}</h4>
                      <span className="text-xs text-slate-500">{cert.date}</span>
                    </div>
                    <p className="text-sm text-slate-400">{cert.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center py-20">
        <div className={`max-w-7xl mx-auto px-6 w-full transition-all duration-1000 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Arsenal
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], idx) => (
              <div 
                key={category}
                className="p-6 bg-slate-800/30 border border-indigo-500/20 rounded-2xl backdrop-blur-sm hover:border-indigo-400/50 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-indigo-400 mb-4 capitalize flex items-center gap-2">
                  {category === 'languages' && <Terminal className="w-5 h-5" />}
                  {category === 'web' && <Code className="w-5 h-5" />}
                  {category === 'aiml' && <Brain className="w-5 h-5" />}
                  {category === 'cloud' && <Cpu className="w-5 h-5" />}
                  {category === 'tools' && <Database className="w-5 h-5" />}
                  {category === 'concepts' && <Award className="w-5 h-5" />}
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-lg text-sm text-slate-200 hover:from-indigo-500/30 hover:to-purple-500/30 hover:border-indigo-400 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center py-20">
        <div className={`max-w-7xl mx-auto px-6 w-full transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <div className="space-y-8">
            {projects.map((project, idx) => (
              <div 
                key={idx}
                className="p-8 bg-slate-800/30 border border-indigo-500/20 rounded-2xl backdrop-blur-sm hover:border-indigo-400/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-indigo-500/10 rounded-xl border border-indigo-500/30 group-hover:bg-indigo-500/20 transition-all duration-300">
                    <project.icon className="w-8 h-8 text-indigo-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-100 mb-1">{project.title}</h3>
                        <p className="text-indigo-300 text-sm">{project.subtitle}</p>
                      </div>
                      <span className="text-sm text-slate-500">{project.period}</span>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {project.description.map((desc, i) => (
                        <li key={i} className="text-slate-300 flex items-start gap-2">
                          <span className="text-indigo-400 mt-1.5">▹</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded-lg text-xs text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center py-20">
        <div className={`max-w-7xl mx-auto px-6 w-full transition-all duration-1000 ${isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="p-8 bg-slate-800/30 border border-indigo-500/20 rounded-2xl backdrop-blur-sm hover:border-indigo-400/50 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-indigo-500/10 rounded-xl border border-indigo-500/30">
                  <Briefcase className="w-8 h-8 text-indigo-400" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-100 mb-1">{experience.company}</h3>
                      <p className="text-indigo-300">{experience.role}</p>
                    </div>
                    <span className="text-sm text-slate-500">{experience.period}</span>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {experience.tasks.map((task, i) => (
                      <li key={i} className="text-slate-300 flex items-start gap-2">
                        <span className="text-indigo-400 mt-1.5">▹</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {experience.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded-lg text-xs text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center py-20">
        <div className={`max-w-7xl mx-auto px-6 w-full transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>

          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              I'm currently looking for new opportunities in AI/ML and Software Development. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <a 
                href="mailto:yashgarg932@gmail.com"
                className="p-6 bg-slate-800/30 border border-indigo-500/20 rounded-2xl backdrop-blur-sm hover:border-indigo-400 transition-all duration-300 flex items-center gap-4 group"
              >
                <Mail className="w-8 h-8 text-indigo-400 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="text-slate-200">yashgarg932@gmail.com</p>
                </div>
              </a>

              <a 
                href="tel:904-504-1239"
                className="p-6 bg-slate-800/30 border border-indigo-500/20 rounded-2xl backdrop-blur-sm hover:border-indigo-400 transition-all duration-300 flex items-center gap-4 group"
              >
                <Phone className="w-8 h-8 text-indigo-400 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <p className="text-sm text-slate-400">Phone</p>
                  <p className="text-slate-200">904-504-1239</p>
                </div>
              </a>
            </div>

            <div className="flex justify-center gap-6">
              <a 
                href="https://github.com/yashgarg-29"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-slate-800/50 border border-indigo-500/30 rounded-xl hover:bg-indigo-500/20 hover:border-indigo-400 transition-all duration-300 hover:scale-110 flex items-center gap-3"
              >
                <Github className="w-6 h-6" />
                <span>GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/yash-garg-523710253"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-slate-800/50 border border-indigo-500/30 rounded-xl hover:bg-indigo-500/20 hover:border-indigo-400 transition-all duration-300 hover:scale-110 flex items-center gap-3"
              >
                <Linkedin className="w-6 h-6" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://leetcode.com/u/YashGarg29/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-slate-800/50 border border-indigo-500/30 rounded-xl hover:bg-indigo-500/20 hover:border-indigo-400 transition-all duration-300 hover:scale-110 flex items-center gap-3"
              >
                <Code className="w-6 h-6" />
                <span>LeetCode</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-indigo-500/20 bg-slate-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-400">
            Designed & Built by <span className="text-indigo-400 font-semibold">Yash Garg</span>
          </p>
          <p className="text-sm text-slate-500 mt-2">Bareilly, Uttar Pradesh</p>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}