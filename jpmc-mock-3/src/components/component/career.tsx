import { useState } from 'react';
import emailjs from 'emailjs-com';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Career() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneCountryCode: '',
    phone: '',
    dob: '',
    experience: '',
  });

  const handleChange = (e: { target: { id: any; value: any; }; }) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };
  
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  const serviceId = 'service_l68gw55';
    const templateId = 'template_n0w1go4';
    const publicKey = '';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: 'Lekhan',
    //   message: formData.message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });

    };

  return (
    <form onSubmit={handleSubmit}>
      <Card className="w-full max-w-2xl mx-auto p-6 sm:p-8 my-24">
        <CardHeader className="flex flex-col items-center">
          <CardTitle>Teacher Registration</CardTitle>
          <CardDescription>Fill out the form to register as a teacher.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 items-center">
          <div className="grid grid-cols-1 gap-6 items-center">
            <div className="space-y-2 items-center">
              <Label htmlFor="name" className="text-center">Full Name</Label>
              <Input id="name" placeholder="Enter your full name" value={formData.name} onChange={handleChange} />
            </div>
            <div className="space-y-2 items-center">
              <Label htmlFor="email" className="text-center">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="space-y-2 items-center">
              <Label htmlFor="phone" className="text-center">Phone Number</Label>
              <div className="flex gap-2">
                <Input id="phoneCountryCode" placeholder="+1" className="w-20" value={formData.phoneCountryCode} onChange={handleChange} />
                <Input id="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} />
              </div>
            </div>
            <div className="space-y-2 items-center">
              <Label htmlFor="dob" className="text-center">Date of Birth</Label>
              <Input id="dob" type="date" value={formData.dob} onChange={handleChange} />
            </div>
            <div className="space-y-2 items-center">
              <Label htmlFor="experience" className="text-center">Years of Experience</Label>
              <Input id="experience" type="number" min="0" value={formData.experience} onChange={handleChange} />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button type="submit">Register</Button>
        </CardFooter>
      </Card>
    </form>
  );
}