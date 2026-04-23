import { useParams, useNavigate } from "react-router-dom";

function InsightDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const insightsDetails = [
    {
      id: 1,
      title: "How Digital Transformation is Reshaping Modern Businesses?",
      summary:
        "Digital transformation is no longer optional for businesses that want to stay competitive. It is changing how companies operate, serve customers, and improve internal efficiency.",
      content: {
        introduction:
          "Digital transformation is helping businesses move beyond traditional working models and adopt technology-driven solutions that improve speed, accuracy, and customer satisfaction. From automating routine operations to improving communication and decision-making, modern organizations are using digital tools to stay competitive in a rapidly changing business environment.",
        sections: [
          {
            heading: "Why Digital Transformation Matters?",
            paragraph:
              "In today's fast-moving market, businesses are expected to respond quickly to customer needs, market shifts, and operational challenges. Digital transformation helps organizations become more agile, efficient, and data-driven.",
            points: [
              "It improves business efficiency by automating repetitive and time-consuming tasks.",
              "It supports faster communication and collaboration across teams and departments.",
              "It helps organizations make smarter decisions using real-time data and analytics.",
              "It enhances customer experience by making services faster, smoother, and more personalized.",
            ],
          },
          {
            heading: "Key Areas Where Businesses Are Transforming",
            paragraph:
              "Digital transformation impacts the complete business ecosystem and helps create a more connected and effective work environment.",
            points: [
              "Operations are becoming faster through workflow automation.",
              "Customer support is improving with AI tools and CRM systems.",
              "Recruitment is becoming more efficient through digital hiring platforms.",
              "Finance processes are becoming more accurate with cloud-based tools.",
            ],
          },
        ],
        keyTakeaways: [
          "Improves efficiency and speed.",
          "Supports better decision-making.",
          "Enhances customer experience.",
          "Helps businesses stay competitive.",
        ],
      },
    },
    {
      id: 2,
      title: "The Growing Importance of Strategic Staffing Solutions",
      summary:
        "Strategic staffing has become essential for businesses that want to attract the right talent, reduce hiring delays, and build stronger teams.",
      content: {
        introduction:
          "Hiring the right people at the right time is one of the most important factors in business growth. Strategic staffing helps organizations reduce recruitment challenges and build high-performing teams.",
        sections: [
          {
            heading: "What Strategic Staffing Means?",
            paragraph:
              "Strategic staffing is a planned approach that aligns hiring with business goals and future growth.",
            points: [
              "Focuses on skill and cultural fit.",
              "Builds a strong talent pipeline.",
              "Reduces hiring gaps.",
              "Supports long-term workforce planning.",
            ],
          },
          {
            heading: "Common Hiring Challenges",
            paragraph:
              "Many organizations face delays and inefficiencies in hiring.",
            points: [
              "Difficulty finding qualified candidates.",
              "Long hiring cycles.",
              "Skill mismatch.",
              "High employee turnover.",
            ],
          },
        ],
        keyTakeaways: [
          "Improves hiring quality.",
          "Reduces delays.",
          "Supports business growth.",
          "Builds stronger teams.",
        ],
      },
    },
    {
      id: 3,
      title: "Why IT Services Are Essential for Scalable Business Operations?",
      summary:
        "Reliable IT services help businesses streamline operations, improve security, and support scalable growth.",
      content: {
        introduction:
          "Technology is a core part of modern business. IT services ensure smooth operations, reduce technical issues, and support growth.",
        sections: [
          {
            heading: "Role of IT Services",
            paragraph:
              "IT services provide the backbone for business operations.",
            points: [
              "Ensure system stability.",
              "Improve team productivity.",
              "Support data security.",
              "Reduce downtime.",
            ],
          },
          {
            heading: "Key Benefits",
            paragraph:
              "Strong IT support improves efficiency and reliability.",
            points: [
              "Better performance.",
              "Stronger cybersecurity.",
              "Faster issue resolution.",
              "Easy scalability.",
            ],
          },
        ],
        keyTakeaways: [
          "Improves efficiency.",
          "Strengthens security.",
          "Reduces downtime.",
          "Supports scalability.",
        ],
      },
    },
    {
      id: 4,
      title: "How Data-Driven Decision Making Improves Business Performance?",
      summary:
        "Data-driven decision making helps businesses improve planning, reduce guesswork, and make smarter strategic decisions.",
      content: {
        introduction:
          "Using data helps organizations make better decisions based on facts instead of assumptions.",
        sections: [
          {
            heading: "Why Data Matters?",
            paragraph:
              "Data provides clarity and insights for better decision-making.",
            points: [
              "Identifies trends.",
              "Improves planning.",
              "Reduces guesswork.",
              "Enhances visibility.",
            ],
          },
          {
            heading: "Business Impact",
            paragraph:
              "Data improves performance across departments.",
            points: [
              "Better marketing decisions.",
              "Improved HR strategies.",
              "Accurate financial planning.",
              "Efficient operations.",
            ],
          },
        ],
        keyTakeaways: [
          "Improves decision quality.",
          "Supports planning.",
          "Enhances efficiency.",
          "Drives growth.",
        ],
      },
    },
    {
      id: 5,
      title: "The Role of Automation in Improving Business Efficiency",
      summary:
        "Automation helps businesses reduce manual work, improve accuracy, and increase productivity.",
      content: {
        introduction:
          "Automation reduces repetitive manual tasks and allows businesses to focus on strategic work.",
        sections: [
          {
            heading: "What is Business Automation?",
            paragraph:
              "Automation uses technology to perform tasks with minimal human effort.",
            points: [
              "Reduces manual work.",
              "Improves accuracy.",
              "Enhances workflow efficiency.",
              "Saves time.",
            ],
          },
          {
            heading: "Where Automation is Used?",
            paragraph:
              "Automation is applied across various business functions.",
            points: [
              "Customer support through chatbots and automated responses.",
              "HR processes such as resume screening and onboarding workflows.",
              "Finance tasks like invoicing, billing, and reporting.",
              "Marketing automation for campaigns and engagement tracking.",
            ],
          },
        ],
        keyTakeaways: [
          "Improves productivity.",
          "Reduces errors.",
          "Saves time.",
          "Supports scalability.",
        ],
      },
    },
    {
      id: 6,
      title: "The Importance of Customer Experience in Business Success",
      summary:
        "Customer experience plays a major role in satisfaction, loyalty, and long-term business success.",
      content: {
        introduction:
          "Customer experience has become a key factor in business success, especially in competitive markets.",
        sections: [
          {
            heading: "What Defines Customer Experience?",
            paragraph:
              "Customer experience is based on interactions across all touchpoints.",
            points: [
              "Includes all customer interactions.",
              "Depends on service quality.",
              "Reflects business understanding.",
              "Builds trust.",
            ],
          },
          {
            heading: "Why It Matters?",
            paragraph:
              "Good customer experience drives growth.",
            points: [
              "Increases retention.",
              "Builds loyalty.",
              "Improves reputation.",
              "Attracts new customers.",
            ],
          },
        ],
        keyTakeaways: [
          "Improves customer loyalty.",
          "Builds strong relationships.",
          "Enhances brand value.",
          "Supports long-term growth.",
        ],
      },
    },
  ];

  const insight = insightsDetails.find((item) => item.id === parseInt(id, 10));

  const handleBackToHome = () => {
    navigate("/", {
      state: { scrollToInsights: true },
    });
  };

  if (!insight) {
    return (
      <section className="insight-detail-page">
        <div className="insight-detail-container">
          <h2 className="insight-detail-title">Insight not found</h2>
          <p className="insight-detail-summary">
            The insight you are looking for does not exist.
          </p>
          <button className="back-btn" onClick={handleBackToHome}>
            ← Back to Home
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="insight-detail-page">
      <div className="insight-detail-container">
        <span className="insight-detail-tag">Insight Details</span>

        <h1 className="insight-detail-title">{insight.title}</h1>

        <p className="insight-detail-summary">{insight.summary}</p>

        <div className="insight-detail-content">
          <div className="insight-detail-section">
            <h2>Introduction</h2>
            <p>{insight.content.introduction}</p>
          </div>

          {insight.content.sections.map((section, index) => (
            <div className="insight-detail-section" key={index}>
              <h2>{section.heading}</h2>
              <p>{section.paragraph}</p>

              <ul className="insight-detail-list">
                {section.points.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
            </div>
          ))}

          <div className="insight-detail-section">
            <h2>Key Takeaways</h2>
            <ul className="insight-detail-list">
              {insight.content.keyTakeaways.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <button className="back-btn" onClick={handleBackToHome}>
          ← Back to Home
        </button>
      </div>
    </section>
  );
}

export default InsightDetail;