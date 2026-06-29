"use client";

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10 border-b border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: January 2024</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl prose prose-invert">
          <div className="space-y-8 text-muted-foreground">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                1. Introduction
              </h2>
              <p>
                PSTC (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;)
                operates the PSTC website and related services. This page
                informs you of our policies regarding the collection, use, and
                disclosure of personal data when you use our Service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                2. Information Collection and Use
              </h2>
              <p>
                We collect several different types of information for various
                purposes to provide and improve our Service to you.
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>
                  Personal Data: Name, email address, phone number, and other
                  contact information
                </li>
                <li>
                  Usage Data: Browser type, IP address, pages visited, and time
                  spent on pages
                </li>
                <li>
                  Device Information: Device type, operating system, and device
                  identifiers
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                3. Use of Data
              </h2>
              <p>PSTC uses the collected data for various purposes:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>
                  To allow you to participate in interactive features of our
                  Service
                </li>
                <li>To provide customer support</li>
                <li>
                  To gather analysis or valuable information for improving our
                  Service
                </li>
                <li>To monitor the usage of our Service</li>
                <li>
                  To detect, prevent, and address technical and security issues
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                4. Security of Data
              </h2>
              <p>
                The security of your data is important to us but remember that
                no method of transmission over the Internet or method of
                electronic storage is 100% secure. While we strive to use
                commercially acceptable means to protect your Personal Data, we
                cannot guarantee its absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                5. Changes to This Privacy Policy
              </h2>
              <p>
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the &quot;Last updated&quot; date at the
                top of this Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                6. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Email: privacy@pstc.org</li>
                <li>Phone: +880-2-XXXX-XXXX</li>
              </ul>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-8">
              <p className="text-sm">
                This Privacy Policy applies only to our online activities and is
                valid with respect to the information that you share with us or
                that we collect from you on our website.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
