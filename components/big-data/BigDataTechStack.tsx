import styles from "./BigDataTechStack.module.css";

const ROWS: { title: string; tools: string[] }[] = [
  { title: "Databases (relational & NoSQL)", tools: ["PostgreSQL", "MySQL", "Microsoft SQL Server", "MongoDB", "Redis", "Cassandra", "AWS DynamoDB", "Apache HBase", "ClickHouse", "Neo4j"] },
  { title: "Data warehousing & OLAP", tools: ["Amazon Redshift", "Google BigQuery", "Snowflake", "ClickHouse", "Cloudera", "DataStax"] },
  { title: "Streaming & real-time processing", tools: ["Apache Kafka", "Apache Kudu", "AWS Kinesis", "Google Pub/Sub", "Apache NiFi", "MQTT / WebSockets"] },
  { title: "Monitoring & metrics", tools: ["InfluxDB", "Chronograf", "Graphite", "Prometheus", "Grafana"] },
  { title: "Analytics & business intelligence", tools: ["Google Analytics", "Power BI", "Tableau", "Looker", "Superset", "Metabase", "Grafana"] },
  { title: "In-memory caching & acceleration", tools: ["Redis", "Memcached"] },
];

export default function BigDataTechStack() {
  return (
    <section id="bd-techstack" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>
          <span className={styles.accent}>Technologies</span> we work with
        </h2>

        <div className={styles.grid}>
          {ROWS.map((row) => (
            <article key={row.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{row.title}</h3>
              <ul className={styles.list}>
                {row.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
