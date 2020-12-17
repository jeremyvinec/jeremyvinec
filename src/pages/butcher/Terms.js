import React, { useState } from "react";
import Header from "../../components/layouts/Header";

function Terms() {

  const [toggleMenu, setToggleMenu] = useState(false);

  const headerToggler = (e) => {
    e.preventDefault();
    setToggleMenu(!toggleMenu);
  };

  // document.body.classList.add("dark");
  //Uncomment the above line if you use dark version

  return (
    <>
      <Header
        logoSource='/favicon.png'
        toggleMenu={toggleMenu}
        headerToggler={headerToggler}
      />
      <main className={toggleMenu ? "content open" : "content"}>
        <div className="spacer" data-height="96"></div>
        <div className="blog-page-section">
          <div className="container">
            <div className="blog-single shadow-dark p-30">
            <h2>jeremyvinec Terms of Service</h2>
            <h3>1. Terms</h3>
            <p>By accessing our app, Butcher, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing Butcher. The materials contained in Butcher are protected by applicable copyright and trademark law.</p>
            <h3>2. Use License</h3>
            <ol type="a">
            <li>Permission is granted to temporarily download one copy of Butcher per device for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            <ol type="i">
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                <li>attempt to decompile or reverse engineer any software contained in Butcher;</li>
                <li>remove any copyright or other proprietary notations from the materials; or</li>
                <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ol>
                </li>
            <li>This license shall automatically terminate if you violate any of these restrictions and may be terminated by jeremyvinec at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</li>
            </ol>
            <h3>3. Disclaimer</h3>
            <ol type="a">
            <li>The materials within Butcher are provided on an 'as is' basis. jeremyvinec makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</li>
            <li>Further, jeremyvinec does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to Butcher.</li>
            </ol>
            <h3>4. Limitations</h3>
            <p>In no event shall jeremyvinec or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use Butcher, even if jeremyvinec or a jeremyvinec authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>
            <h3>5. Accuracy of materials</h3>
            <p>The materials appearing in Butcher could include technical, typographical, or photographic errors. jeremyvinec does not warrant that any of the materials on Butcher are accurate, complete or current. jeremyvinec may make changes to the materials contained in Butcher at any time without notice. However jeremyvinec does not make any commitment to update the materials.</p>
            <h3>6. Links</h3>
            <p>jeremyvinec has not reviewed all of the sites linked to its app and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by jeremyvinec of the site. Use of any such linked website is at the user's own risk.</p>
            <h3>7. Modifications</h3>
            <p>jeremyvinec may revise these terms of service for its app at any time without notice. By using Butcher you are agreeing to be bound by the then current version of these terms of service.</p>
            <h3>8. Governing Law</h3>
            <p>These terms and conditions are governed by and construed in accordance with the laws of france and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
            <p><a href="https://getterms.io" title="Generate a free terms of use document">Terms of Use created with GetTerms.</a></p>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="96"></div>
      </main>
    </>
  );
}

export default Terms;
