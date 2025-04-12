import ExpandableCard from "../components/ExpandableCard";

function RapidBrandKit() {
  return (
    <ExpandableCard
      header="7 Day Rapid Brand Kit"
      custombackgroundColor="#f7bcdc"
    >
      {/* Day 1 */}
      <div className="step">
        <div className="step_heading">Day 1: Brand Discovery</div>
        <div className="step_description">
          Kick off with an immersive session to discover your brand's core.
          We’ll dive into your mission, vision, and values, while exploring your
          audience and competitors. By the end of this day, we’ll have a clear
          direction for your brand.
        </div>
      </div>

      {/* Day 2 */}
      <div className="step">
        <div className="step_heading">Day 2: Defining Your Identity</div>
        <div className="step_description">
          We’ll start crafting your brand’s tone of voice, positioning
          statement, and unique selling points. This will form the backbone of
          your communication strategy, ensuring consistency across all channels.
        </div>
      </div>

      {/* Day 3 */}
      <div className="step">
        <div className="step_heading">Day 3: Logo Exploration</div>
        <div className="step_description">
          Today’s focus will be on logo design. We’ll brainstorm and create
          initial sketches for your logo, ensuring it reflects your brand’s
          identity and resonates with your target audience.
        </div>
      </div>

      {/* Day 4 */}
      <div className="step">
        <div className="step_heading">Day 4: Typography & Color Palette</div>
        <div className="step_description">
          Typography and colors play a huge role in brand identity. We’ll work
          on selecting fonts and creating a color palette that supports your
          logo and embodies your brand personality.
        </div>
      </div>

      {/* Day 5 */}
      <div className="step">
        <div className="step_heading">Day 5: Brand Visuals</div>
        <div className="step_description">
          Time to focus on visuals. We’ll create key visual elements, such as
          imagery, icons, and patterns, that align with your brand’s style.
          These will help ensure a cohesive look across all your materials.
        </div>
      </div>

      {/* Day 6 */}
      <div className="step">
        <div className="step_heading">Day 6: Brand Guidelines</div>
        <div className="step_description">
          We’ll compile all the core elements into a concise brand guideline
          document. This will include rules for logo usage, typography, colors,
          and visuals, providing a clear reference for consistent branding
          across all platforms.
        </div>
      </div>

      {/* Day 7 */}
      <div className="step">
        <div className="step_heading">Day 7: Final Presentation & Handoff</div>
        <div className="step_description">
          It’s time to showcase your brand’s new identity! We’ll present all the
          work done in a final presentation, ensuring everything is aligned with
          your goals. Afterward, we’ll hand off all the assets and guidelines,
          ready for you to use.
        </div>
      </div>
    </ExpandableCard>
  );
}

export default RapidBrandKit;
