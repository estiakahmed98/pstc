"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/use-translation";
import { toast } from "sonner";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Building2,
  Clock,
  Globe2,
  ArrowUpRight,
} from "lucide-react";
import { locations } from "@/lib/data/locations";

export default function ContactPage() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message) {
      toast.success(t("form.thanks"));
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      toast.error("Please fill in all required fields.");
    }
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(9,145,203,0.16),transparent_34%),radial-gradient(circle_at_80%_60%,rgba(148,202,81,0.16),transparent_32%)]" />

        <div className="container relative mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-4 py-2 text-sm font-semibold text-primary shadow-sm backdrop-blur">
              <Mail className="h-4 w-4" />
              Contact Us
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-6xl">
              Get in Touch With PSTC
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              Have a question, partnership proposal, program inquiry, or service
              request? Send us a message and our team will get back to you as
              soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Area */}
      <section className="relative py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Contact Form */}
            <Card className="overflow-hidden border-border/80 bg-card shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
              <div className="border-b border-border bg-muted/30 px-6 py-6 md:px-8">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary">
                  Contact Form
                </p>
                <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
                  Send Us a Message
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Fill out the form below and share your message with us.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 p-6 md:p-8">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      {t("form.name")}{" "}
                      <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      {t("form.email")}{" "}
                      <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="How can we help you?"
                    className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    {t("form.message")}{" "}
                    <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    placeholder="Write your message..."
                    rows={6}
                    className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="h-12 w-full rounded-xl font-bold"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {t("form.submit")}
                </Button>
              </form>
            </Card>

            {/* Office Location */}
            <div className="space-y-6">
              <Card className="overflow-hidden border-border/80 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
                <div className="bg-gradient-to-br from-primary to-secondary p-8 text-white">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                    <Building2 className="h-7 w-7" />
                  </div>

                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-white/80">
                    Office Location
                  </p>

                  <h2 className="mt-2 text-3xl font-extrabold">Head Office</h2>

                  <p className="mt-4 leading-7 text-white/85">
                    Visit our office or contact us through phone and email for
                    program, service, partnership, or organizational inquiries.
                  </p>
                </div>

                <div className="space-y-5 p-6 md:p-8">
                  <div className="flex gap-4">
                    <MapPin className="mt-1 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h3 className="font-bold">Address</h3>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        123 Development Avenue
                        <br />
                        Dhaka 1212, Bangladesh
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Phone className="mt-1 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        +880-2-XXXX-XXXX
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Mail className="mt-1 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <a
                        href="mailto:contact@pstc.org"
                        className="mt-1 inline-block text-sm font-semibold text-primary hover:underline"
                      >
                        contact@pstc.org
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Clock className="mt-1 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h3 className="font-bold">Office Hours</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Sunday - Thursday, 9:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="grid gap-4 sm:grid-cols-2">
                <Card className="p-5">
                  <Globe2 className="mb-3 h-7 w-7 text-primary" />
                  <h3 className="font-bold">Program Inquiry</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Reach out for health, youth, training, and development
                    program information.
                  </p>
                </Card>

                <Card className="p-5">
                  <ArrowUpRight className="mb-3 h-7 w-7 text-primary" />
                  <h3 className="font-bold">Partnership</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Connect with us for collaboration, research, and community
                    development partnerships.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="border-y border-border bg-muted/30 py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary">
              Interactive Maps
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
              Find Us on the Map
            </h2>
            <p className="mt-4 text-muted-foreground">
              Use the interactive map below to locate our head office and plan
              your visit easily.
            </p>
          </div>

          <Card className="overflow-hidden border-border/80 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
            <div className="aspect-[16/9] w-full">
              <iframe
                title="PSTC Office Location Map"
                src="https://www.google.com/maps?q=Dhaka%201212%20Bangladesh&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Card>
        </div>
      </section>

      {/* Regional Offices */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary">
                Regional Offices
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
                Our Working Locations
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-muted-foreground">
              PSTC works through regional presence and community-based service
              delivery points to support vulnerable communities.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {locations.map((loc) => (
              <Card
                key={loc.id}
                className="group overflow-hidden border-border/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                  <MapPin className="h-6 w-6" />
                </div>

                <h3 className="text-lg font-bold">{loc.name}</h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {loc.address}
                </p>

                <div className="mt-5 space-y-2">
                  {loc.phone && (
                    <p className="text-sm">
                      <strong>Phone:</strong> {loc.phone}
                    </p>
                  )}

                  {loc.email && (
                    <p className="break-words text-sm">
                      <strong>Email:</strong> {loc.email}
                    </p>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
