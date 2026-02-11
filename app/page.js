"use client";

import { useState } from "react";

const starterModules = [
  { icon: "☉", name: "Westliche Astrologie" },
  { icon: "龍", name: "Chinesisches Tierkreiszeichen" },
  { icon: "𝟕", name: "Numerologie" },
  { icon: "🧬", name: "Gene Keys" },
  { icon: "✡", name: "Kabbalah / Lebensbaum" },
  { icon: "🌳", name: "Keltisches Baumhoroskop" },
  { icon: "🃏", name: "Tarot-Geburtskarte" },
];

const mediumExtra = [
  { icon: "◈", name: "Human Design" },
  { icon: "☀", name: "Maya Tzolkin" },
  { icon: "👁", name: "Irisdiagnostik" },
  { icon: "🪞", name: "Physiognomie" },
  { icon: "🕉", name: "Ayurveda-Dosha" },
];

const premiumExtra = [
  { icon: "✋", name: "Handanalyse / LifePrints" },
  { icon: "💬", name: "Persönliches Auswertungsgespräch" },
];

const recommendedTests = [
  { icon: "◐", name: "Big Five", desc: "Das wissenschaftlich valideste Persönlichkeitsmodell weltweit" },
  { icon: "⬡", name: "Enneagramm", desc: "Erklärt deine Kernmotivation und Stressmuster" },
  { icon: "⊞", name: "MBTI / 16Personalities", desc: "Kognitive Funktionen und Denkstil" },
  { icon: "♡", name: "Attachment Style", desc: "Dein Beziehungsmuster in allen Lebensbereichen" },
];

const additionalTests = [
  { icon: "▲", name: "Dark Triad" },
  { icon: "◇", name: "Schwartz Values" },
  { icon: "⚔", name: "Jungsche Archetypen" },
  { icon: "◉", name: "DiSC" },
  { icon: "⚖", name: "Thomas-Kilmann" },
  { icon: "★", name: "CliftonStrengths" },
];

const packages = [
  {
    id: "starter",
    name: "Starter",
    subtitle: "Dein digitales Persönlichkeitsprofil",
    price: "149",
    color: "#4ECDC4",
    gradStart: "rgba(78,205,196,0.12)",
    gradEnd: "rgba(78,205,196,0.03)",
    borderColor: "rgba(78,205,196,0.2)",
    features: [
      "7 geburtsdatenbasierte Analysen",
      "Automatisch berechnet – kein Aufwand",
      "Persönliche Ergebnis-Webseite",
      "Integrierter PDF-Gesamtbericht",
      "Optionale Selbsttests inklusive",
    ],
    modules: starterModules,
    extraLabel: null,
    extraModules: [],
  },
  {
    id: "medium",
    name: "Medium",
    subtitle: "Erweiterte Analyse",
    price: "499",
    color: "#9B6FE8",
    gradStart: "rgba(155,111,232,0.12)",
    gradEnd: "rgba(155,111,232,0.03)",
    borderColor: "rgba(155,111,232,0.2)",
    popular: true,
    features: [
      "Alles aus dem Starter",
      "Human Design & Maya Tzolkin",
      "Irisdiagnostik & Physiognomie (digital)",
      "Ayurveda-Dosha Bestimmung",
      "Optionale Selbsttests inklusive",
    ],
    modules: starterModules,
    extraLabel: "Zusätzlich im Medium",
    extraModules: mediumExtra,
  },
  {
    id: "premium",
    name: "Premium",
    subtitle: "Das komplette Erlebnis",
    price: "899",
    color: "#E8A838",
    gradStart: "rgba(232,168,56,0.12)",
    gradEnd: "rgba(232,168,56,0.03)",
    borderColor: "rgba(232,168,56,0.2)",
    features: [
      "Alles aus dem Medium",
      "Handanalyse / LifePrints vor Ort",
      "Persönliches Auswertungsgespräch",
      "60–90 Minuten individuell",
      "Die umfassendste Analyse",
    ],
    modules: starterModules,
    extraLabel: "Zusätzlich im Premium",
    extraModules: [...mediumExtra, ...premiumExtra],
  },
];

const faqItems = [
  {
    q: "Was brauche ich für die Analyse?",
    a: "Beim Starter nur dein Geburtsdatum, deine Geburtszeit und deinen Geburtsort. Je nach Paket kommen Fotos (Augen, Gesicht) oder ein Vor-Ort-Termin dazu. Die optionalen Selbsttests kannst du bequem online machen."
  },
  {
    q: "Wie lange dauert es, bis ich meinen Bericht bekomme?",
    a: "Beim Starter erhältst du deinen Bericht innerhalb von 3–5 Werktagen. Beim Medium und Premium kann es je nach Terminvereinbarung 1–2 Wochen dauern."
  },
  {
    q: "Was sind die optionalen Selbsttests?",
    a: "Das sind wissenschaftliche Persönlichkeitstests wie Big Five, Enneagramm oder MBTI, die du kostenlos online machen kannst. Sie sind in jedem Paket ohne Aufpreis enthalten und machen deine Analyse deutlich tiefer und genauer. Wir empfehlen besonders Big Five, Enneagramm, MBTI und den Attachment Style Test."
  },
  {
    q: "Kann ich später upgraden?",
    a: "Ja, du kannst jederzeit von einem kleineren Paket auf ein grösseres upgraden. Du zahlst nur die Differenz."
  },
  {
    q: "Wie wissenschaftlich ist die Analyse?",
    a: "Unser Bericht kombiniert wissenschaftlich validierte Tests (Big Five, Attachment Style) mit bewährten Reflexionstools (Enneagramm, MBTI, Human Design) und körperbasierten Analysen. Wir sind transparent darüber, welche Systeme wissenschaftlich fundiert sind und welche zur Selbstreflexion dienen."
  }
];

export default function LandingPage() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [showAllModules, setShowAllModules] = useState(null);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#06060f",
      color: "#d0d0d0",
      fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif",
      overflowX: "hidden",
    }}>
      {/* Background effects */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none", zIndex: 0,
        background: "radial-gradient(ellipse at 20% 0%, rgba(78,205,196,0.04) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(155,111,232,0.04) 0%, transparent 60%), radial-gradient(ellipse at 50% 100%, rgba(232,168,56,0.03) 0%, transparent 60%)",
      }} />

      <div style={{ position: "relative", zIndex: 1 }}>

        {/* ===== HERO ===== */}
        <section style={{ textAlign: "center", padding: "80px 24px 60px", maxWidth: 800, margin: "0 auto" }}>
          <div style={{
            fontSize: 11, letterSpacing: 5, textTransform: "uppercase",
            color: "#4ECDC4", marginBottom: 28, opacity: 0.8,
          }}>
            Holistische Persönlichkeitsanalyse
          </div>
          <h1 style={{
            fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 400, color: "#f0ead6",
            margin: "0 0 24px", lineHeight: 1.2, letterSpacing: 0.5,
          }}>
            Entdecke, wer du wirklich bist
          </h1>
          <p style={{
            fontSize: "clamp(15px, 2vw, 18px)", color: "#8a95a5", lineHeight: 1.8,
            maxWidth: 600, margin: "0 auto 40px",
          }}>
            Über 20 Analysesysteme – von westlicher Astrologie über Human Design bis hin zu wissenschaftlichen Persönlichkeitstests – vereint in einem einzigen, personalisierten Bericht.
          </p>
          <div style={{
            width: 80, height: 1,
            background: "linear-gradient(90deg, transparent, rgba(78,205,196,0.5), transparent)",
            margin: "0 auto",
          }} />
        </section>

        {/* ===== HOW IT WORKS ===== */}
        <section style={{ padding: "40px 24px 60px", maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{ fontSize: 11, letterSpacing: 4, textTransform: "uppercase", color: "#5a6a7a", marginBottom: 12 }}>
              So funktioniert es
            </div>
          </div>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24,
          }}>
            {[
              { step: "01", title: "Paket wählen", desc: "Wähle das Paket, das zu dir passt" },
              { step: "02", title: "Daten eingeben", desc: "Geburtsdaten, optional Tests machen, Fotos schicken" },
              { step: "03", title: "Wir analysieren", desc: "Alle Systeme werden berechnet und mit KI verknüpft" },
              { step: "04", title: "Bericht erhalten", desc: "Deine persönliche Webseite und PDF stehen bereit" },
            ].map((item, i) => (
              <div key={i} style={{
                padding: "28px 20px", borderRadius: 16,
                background: "rgba(255,255,255,0.015)", border: "1px solid rgba(255,255,255,0.04)",
                textAlign: "center",
              }}>
                <div style={{ fontSize: 28, color: "#4ECDC4", fontWeight: 300, marginBottom: 12, opacity: 0.6 }}>
                  {item.step}
                </div>
                <div style={{ fontSize: 15, color: "#e0d8c8", marginBottom: 8, fontWeight: 600 }}>
                  {item.title}
                </div>
                <div style={{ fontSize: 13, color: "#6a7a8a", lineHeight: 1.6 }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== PACKAGES ===== */}
        <section style={{ padding: "40px 24px 60px", maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 11, letterSpacing: 4, textTransform: "uppercase", color: "#5a6a7a", marginBottom: 12 }}>
              Pakete
            </div>
            <h2 style={{ fontSize: 28, fontWeight: 400, color: "#f0ead6", margin: 0 }}>
              Wähle deine Analyse-Tiefe
            </h2>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24,
            alignItems: "start",
          }}>
            {packages.map((pkg) => (
              <div key={pkg.id} style={{
                borderRadius: 20, overflow: "hidden", position: "relative",
                background: `linear-gradient(180deg, ${pkg.gradStart}, ${pkg.gradEnd})`,
                border: `1px solid ${pkg.borderColor}`,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}>
                {pkg.popular && (
                  <div style={{
                    position: "absolute", top: 16, right: 16,
                    background: pkg.color, color: "#0a0a1a",
                    fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase",
                    padding: "4px 12px", borderRadius: 20,
                  }}>
                    Beliebt
                  </div>
                )}

                <div style={{ padding: "32px 28px 24px" }}>
                  <div style={{ fontSize: 13, color: pkg.color, letterSpacing: 1, marginBottom: 4 }}>
                    {pkg.name}
                  </div>
                  <div style={{ fontSize: 14, color: "#8a95a5", marginBottom: 20 }}>
                    {pkg.subtitle}
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 24 }}>
                    <span style={{ fontSize: 42, fontWeight: 300, color: "#f0ead6" }}>
                      {pkg.price}
                    </span>
                    <span style={{ fontSize: 16, color: "#6a7a8a" }}>CHF</span>
                  </div>

                  {pkg.features.map((f, i) => (
                    <div key={i} style={{
                      display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 12,
                    }}>
                      <span style={{ color: pkg.color, fontSize: 14, marginTop: 2, flexShrink: 0 }}>✓</span>
                      <span style={{ fontSize: 13.5, color: "#b0b8c4", lineHeight: 1.5 }}>{f}</span>
                    </div>
                  ))}

                  <button style={{
                    width: "100%", marginTop: 20, padding: "14px 0",
                    background: pkg.popular ? pkg.color : "transparent",
                    border: `1px solid ${pkg.color}`,
                    color: pkg.popular ? "#0a0a1a" : pkg.color,
                    borderRadius: 10, cursor: "pointer", fontSize: 14,
                    fontWeight: 600, letterSpacing: 0.5, fontFamily: "inherit",
                    transition: "all 0.3s ease",
                  }}>
                    Jetzt bestellen
                  </button>
                </div>

                {/* Module list toggle */}
                <div style={{
                  borderTop: `1px solid ${pkg.borderColor}`,
                  padding: "16px 28px",
                }}>
                  <button
                    onClick={() => setShowAllModules(showAllModules === pkg.id ? null : pkg.id)}
                    style={{
                      background: "none", border: "none", color: "#6a7a8a",
                      cursor: "pointer", fontSize: 12, fontFamily: "inherit",
                      letterSpacing: 0.5, padding: 0, width: "100%", textAlign: "left",
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                    }}
                  >
                    <span>Enthaltene Module anzeigen</span>
                    <span style={{
                      transform: showAllModules === pkg.id ? "rotate(180deg)" : "rotate(0)",
                      transition: "transform 0.3s ease", display: "inline-block",
                    }}>▾</span>
                  </button>

                  {showAllModules === pkg.id && (
                    <div style={{ marginTop: 16, animation: "fadeIn 0.3s ease" }}>
                      <div style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "#4a5a6a", marginBottom: 10 }}>
                        Geburtsdaten-basiert
                      </div>
                      {pkg.modules.map((m, i) => (
                        <div key={i} style={{
                          fontSize: 12.5, color: "#8a95a5", padding: "4px 0",
                          display: "flex", gap: 8, alignItems: "center",
                        }}>
                          <span style={{ fontSize: 14 }}>{m.icon}</span> {m.name}
                        </div>
                      ))}
                      {pkg.extraModules.length > 0 && (
                        <>
                          <div style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "#4a5a6a", marginTop: 14, marginBottom: 10 }}>
                            {pkg.extraLabel}
                          </div>
                          {pkg.extraModules.map((m, i) => (
                            <div key={i} style={{
                              fontSize: 12.5, color: pkg.color, padding: "4px 0",
                              display: "flex", gap: 8, alignItems: "center", opacity: 0.85,
                            }}>
                              <span style={{ fontSize: 14 }}>{m.icon}</span> {m.name}
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== OPTIONAL TESTS ===== */}
        <section style={{ padding: "40px 24px 60px", maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{ fontSize: 11, letterSpacing: 4, textTransform: "uppercase", color: "#5a6a7a", marginBottom: 12 }}>
              In jedem Paket inklusive
            </div>
            <h2 style={{ fontSize: 24, fontWeight: 400, color: "#f0ead6", margin: "0 0 12px" }}>
              Optionale Selbsttests
            </h2>
            <p style={{ fontSize: 14, color: "#6a7a8a", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
              Diese Tests kannst du kostenlos online machen und damit deine Analyse vertiefen. Du lädst einfach dein Ergebnis hoch – wir integrieren es in deinen Bericht.
            </p>
          </div>

          {/* Recommended */}
          <div style={{ marginBottom: 32 }}>
            <div style={{
              display: "inline-block", fontSize: 10, letterSpacing: 2, textTransform: "uppercase",
              color: "#4ECDC4", marginBottom: 16, padding: "4px 12px",
              background: "rgba(78,205,196,0.08)", borderRadius: 20, border: "1px solid rgba(78,205,196,0.15)",
            }}>
              ★ Empfohlen
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16 }}>
              {recommendedTests.map((t, i) => (
                <div key={i} style={{
                  padding: "20px 18px", borderRadius: 14,
                  background: "rgba(78,205,196,0.04)", border: "1px solid rgba(78,205,196,0.1)",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <span style={{ fontSize: 20 }}>{t.icon}</span>
                    <span style={{ fontSize: 14, color: "#e0d8c8", fontWeight: 600 }}>{t.name}</span>
                  </div>
                  <div style={{ fontSize: 12, color: "#6a7a8a", lineHeight: 1.6 }}>
                    {t.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional */}
          <div>
            <div style={{
              fontSize: 10, letterSpacing: 2, textTransform: "uppercase",
              color: "#5a6a7a", marginBottom: 16, paddingLeft: 4,
            }}>
              Zusätzlich verfügbar
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {additionalTests.map((t, i) => (
                <div key={i} style={{
                  padding: "8px 16px", borderRadius: 20,
                  background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)",
                  fontSize: 13, color: "#7a8a9a",
                  display: "flex", alignItems: "center", gap: 8,
                }}>
                  <span>{t.icon}</span> {t.name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== WHAT YOU GET ===== */}
        <section style={{
          padding: "60px 24px", maxWidth: 800, margin: "0 auto",
          borderTop: "1px solid rgba(255,255,255,0.04)",
        }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{ fontSize: 11, letterSpacing: 4, textTransform: "uppercase", color: "#5a6a7a", marginBottom: 12 }}>
              Dein Ergebnis
            </div>
            <h2 style={{ fontSize: 24, fontWeight: 400, color: "#f0ead6", margin: 0 }}>
              Mehr als eine Sammlung von Tests
            </h2>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20,
          }}>
            {[
              {
                icon: "◎",
                title: "Persönliche Webseite",
                desc: "Interaktive Ergebnisseite mit allen Analysen einzeln aufbereitet und jederzeit zugänglich",
              },
              {
                icon: "↓",
                title: "Integrierter PDF-Bericht",
                desc: "Alle Systeme thematisch verknüpft – nicht nach System, sondern nach Lebensthemen gegliedert",
              },
              {
                icon: "∞",
                title: "Querverbindungen",
                desc: "KI-gestützte Verknüpfung aller Systeme: Wo zeigen Astrologie, Psychologie und Körperanalyse in dieselbe Richtung?",
              },
            ].map((item, i) => (
              <div key={i} style={{
                padding: "28px 22px", borderRadius: 16,
                background: "rgba(255,255,255,0.015)", border: "1px solid rgba(255,255,255,0.04)",
                textAlign: "center",
              }}>
                <div style={{ fontSize: 32, marginBottom: 16, opacity: 0.7 }}>{item.icon}</div>
                <div style={{ fontSize: 15, color: "#e0d8c8", marginBottom: 10, fontWeight: 600 }}>{item.title}</div>
                <div style={{ fontSize: 13, color: "#6a7a8a", lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section style={{
          padding: "60px 24px 80px", maxWidth: 700, margin: "0 auto",
          borderTop: "1px solid rgba(255,255,255,0.04)",
        }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{ fontSize: 11, letterSpacing: 4, textTransform: "uppercase", color: "#5a6a7a", marginBottom: 12 }}>
              Fragen & Antworten
            </div>
          </div>

          {faqItems.map((item, i) => (
            <div key={i} style={{
              borderBottom: "1px solid rgba(255,255,255,0.04)",
              padding: "20px 0",
            }}>
              <button
                onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                style={{
                  background: "none", border: "none", color: "#d0c8b8",
                  cursor: "pointer", fontSize: 15, fontFamily: "inherit",
                  padding: 0, width: "100%", textAlign: "left",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  lineHeight: 1.5,
                }}
              >
                <span>{item.q}</span>
                <span style={{
                  color: "#4a5a6a", fontSize: 18, marginLeft: 16, flexShrink: 0,
                  transform: expandedFaq === i ? "rotate(45deg)" : "rotate(0)",
                  transition: "transform 0.3s ease",
                }}>+</span>
              </button>
              {expandedFaq === i && (
                <div style={{
                  marginTop: 12, fontSize: 13.5, color: "#7a8a9a",
                  lineHeight: 1.8, animation: "fadeIn 0.3s ease",
                }}>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </section>

        {/* ===== CTA ===== */}
        <section style={{
          padding: "60px 24px 80px", textAlign: "center",
          background: "linear-gradient(180deg, transparent, rgba(78,205,196,0.03))",
        }}>
          <h2 style={{ fontSize: 28, fontWeight: 400, color: "#f0ead6", margin: "0 0 16px" }}>
            Bereit, dich selbst zu entdecken?
          </h2>
          <p style={{ fontSize: 15, color: "#6a7a8a", marginBottom: 32, maxWidth: 500, margin: "0 auto 32px" }}>
            Starte mit deinem Geburtsdatum und erhalte ein Persönlichkeitsprofil, wie du es noch nie gesehen hast.
          </p>
          <button style={{
            background: "linear-gradient(135deg, rgba(78,205,196,0.2), rgba(155,111,232,0.15))",
            border: "1px solid rgba(78,205,196,0.3)",
            color: "#4ECDC4", padding: "16px 40px",
            borderRadius: 12, cursor: "pointer", fontSize: 15,
            fontWeight: 600, letterSpacing: 0.5, fontFamily: "inherit",
            transition: "all 0.3s ease",
          }}>
            Jetzt Paket wählen
          </button>
        </section>

        {/* Footer */}
        <footer style={{
          textAlign: "center", padding: "24px", borderTop: "1px solid rgba(255,255,255,0.04)",
        }}>
          <div style={{ fontSize: 11, color: "#3a4a5a", letterSpacing: 1 }}>
            © 2026 Holistic Profile Analysis
          </div>
        </footer>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        * { box-sizing: border-box; margin: 0; }
        button:focus { outline: none; }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}
