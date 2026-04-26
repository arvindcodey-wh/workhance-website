import { useParams, useNavigate } from "react-router-dom";

function InsightDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

const insightsDetails = [
  {
    id: 1,
    title: "Top Hiring Trends in 2026",
    summary:
      "Hiring in 2026 is shifting towards skills, speed, and smarter decision-making. Companies are focusing on quality talent over traditional hiring methods.",
    content: {
      introduction:
        "The hiring landscape is evolving rapidly. Companies are no longer relying only on degrees — they are prioritizing real skills, adaptability, and cultural fit. Faster hiring processes and smarter tools are becoming essential to stay competitive.",

      sections: [
        {
          heading: "Key Hiring Shifts in 2026",
          paragraph:
            "Businesses are redefining how they hire to stay ahead in a competitive talent market.",
          points: [
            "Skill-based hiring is replacing degree-based filtering.",
            "AI tools are speeding up resume screening and candidate selection.",
            "Companies prefer candidates who can adapt quickly.",
            "Remote and hybrid hiring is becoming the norm.",
          ],
        },
        {
          heading: "What This Means for Businesses?",
          paragraph:
            "Organizations need to rethink their hiring strategies to attract better talent faster.",
          points: [
            "Faster hiring cycles reduce loss of good candidates.",
            "Better hiring decisions improve team performance.",
            "Flexible hiring increases talent pool access.",
            "Strong employer branding attracts top candidates.",
          ],
        },
      ],

      keyTakeaways: [
        "Hiring is becoming skill-focused.",
        "Speed matters more than ever.",
        "Better hiring = better teams.",
        "Adaptability is key.",
      ],
    },
  },

  {
    id: 2,
    title: "Why IT Strategy Drives Business Growth?",
    summary:
      "A strong IT strategy helps businesses scale efficiently, improve performance, and stay ahead in a digital-first world.",
    content: {
      introduction:
        "Technology is no longer just support — it is a growth driver. A well-planned IT strategy helps businesses improve efficiency, reduce risks, and scale operations smoothly.",

      sections: [
        {
          heading: "Role of IT Strategy",
          paragraph:
            "A strong IT foundation ensures smooth operations and long-term growth.",
          points: [
            "Improves system performance and reliability.",
            "Supports business scalability.",
            "Enhances data security.",
            "Enables faster decision-making.",
          ],
        },
        {
          heading: "Business Impact",
          paragraph:
            "Companies with strong IT strategies outperform competitors.",
          points: [
            "Better productivity across teams.",
            "Reduced downtime and technical issues.",
            "Improved customer experience.",
            "Stronger digital presence.",
          ],
        },
      ],

      keyTakeaways: [
        "IT drives growth, not just support.",
        "Strong systems = better performance.",
        "Technology improves efficiency.",
        "Scalability depends on IT.",
      ],
    },
  },

  {
    id: 3,
    title: "The Future of RPO & Staffing",
    summary:
      "Staffing is becoming smarter, faster, and more data-driven, helping businesses hire better talent with less delay.",
    content: {
      introduction:
        "Recruitment is evolving beyond traditional hiring. Businesses now expect faster, more accurate, and more strategic staffing solutions.",

      sections: [
        {
          heading: "Modern Staffing Approach",
          paragraph:
            "Recruitment is becoming more strategic and aligned with business goals.",
          points: [
            "Focus on quality over quantity.",
            "Use of data-driven hiring decisions.",
            "Better candidate matching.",
            "Faster recruitment cycles.",
          ],
        },
        {
          heading: "Challenges Solved",
          paragraph:
            "Modern staffing solutions address common hiring problems.",
          points: [
            "Reduces hiring delays.",
            "Minimizes skill mismatch.",
            "Improves employee retention.",
            "Enhances hiring accuracy.",
          ],
        },
      ],

      keyTakeaways: [
        "Smarter hiring improves results.",
        "Speed is critical in hiring.",
        "Better fit = long-term success.",
        "Data-driven hiring is the future.",
      ],
    },
  },

  {
    id: 4,
    title: "Why Financial Accuracy Matters?",
    summary:
      "Accurate financial systems help businesses make better decisions, manage risks, and maintain stability.",
    content: {
      introduction:
        "Financial clarity is essential for business growth. Without accurate financial data, companies struggle to plan, invest, and scale effectively.",

      sections: [
        {
          heading: "Importance of Financial Accuracy",
          paragraph:
            "Strong financial systems provide stability and control.",
          points: [
            "Improves cash flow visibility.",
            "Supports better budgeting.",
            "Ensures compliance with regulations.",
            "Reduces financial risks.",
          ],
        },
        {
          heading: "Business Benefits",
          paragraph:
            "Accurate finance directly impacts decision-making.",
          points: [
            "Better investment decisions.",
            "Improved profitability tracking.",
            "Stronger financial planning.",
            "Reduced errors and losses.",
          ],
        },
      ],

      keyTakeaways: [
        "Accuracy builds trust and control.",
        "Better data = better decisions.",
        "Finance impacts every business area.",
        "Clarity reduces risk.",
      ],
    },
  },

  {
    id: 5,
    title: "Scalable Support for Growing Teams",
    summary:
      "As businesses grow, scalable systems help maintain efficiency without slowing down operations.",
    content: {
      introduction:
        "Growth brings challenges. Without scalable support systems, businesses face delays, inefficiencies, and operational pressure.",

      sections: [
        {
          heading: "Why Scalability Matters?",
          paragraph:
            "Systems should grow with the business, not limit it.",
          points: [
            "Handles increased workload smoothly.",
            "Prevents operational bottlenecks.",
            "Maintains service quality.",
            "Supports team expansion.",
          ],
        },
        {
          heading: "Operational Impact",
          paragraph:
            "Scalable support improves overall business performance.",
          points: [
            "Better workflow management.",
            "Reduced pressure on teams.",
            "Improved efficiency.",
            "Faster response times.",
          ],
        },
      ],

      keyTakeaways: [
        "Scalability supports growth.",
        "Efficiency increases with systems.",
        "Reduces operational stress.",
        "Improves long-term performance.",
      ],
    },
  },

  {
    id: 6,
    title: "Data-Driven Marketing Creates Impact",
    summary:
      "Modern marketing uses data to improve targeting, engagement, and overall campaign performance.",
    content: {
      introduction:
        "Marketing today is not guesswork. Businesses rely on data to understand customers, improve campaigns, and maximize results.",

      sections: [
        {
          heading: "Why Data Matters in Marketing?",
          paragraph:
            "Data helps businesses make smarter marketing decisions.",
          points: [
            "Tracks customer behavior.",
            "Improves targeting accuracy.",
            "Measures campaign performance.",
            "Optimizes marketing strategies.",
          ],
        },
        {
          heading: "Business Benefits",
          paragraph:
            "Data-driven marketing leads to better outcomes.",
          points: [
            "Higher engagement rates.",
            "Better ROI on campaigns.",
            "Improved customer understanding.",
            "Stronger brand positioning.",
          ],
        },
      ],

      keyTakeaways: [
        "Data improves marketing results.",
        "Better targeting = better engagement.",
        "Decisions become smarter.",
        "Marketing becomes measurable.",
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