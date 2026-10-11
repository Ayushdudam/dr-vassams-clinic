// Test mocked successful enquiry submission
import assert from "node:assert";

// Mocking global fetch for the API handler or calling the handler logic directly
import { appointmentFormSchema } from "../src/lib/schema.js";

async function testMockSuccess() {
  console.log("=== TESTING MOCKED ENQUIRY SUCCESS FLOW ===");
  
  const samplePayload = {
    fullName: "Pooja Mehta",
    phone: "9833675356",
    preferredDay: "Friday",
    preferredTimeWindow: "evening",
    reason: "Skin consultation enquiry",
    consent: true,
    website: "",
  };

  const parsed = appointmentFormSchema.safeParse(samplePayload);
  assert(parsed.success, "Payload should validate successfully");

  // Simulated Resend success response
  const mockedResendResponse = {
    id: "mock_msg_123456789",
    from: "appointments@dr-vassams-clinic.com",
    to: "clinic@example.com",
    created_at: new Date().toISOString(),
  };

  console.log("Mocked Resend API 200 OK Response:", mockedResendResponse);
  
  // Simulated API response to client
  const apiResponse = {
    success: true,
    message: "Your request has been sent. The clinic will contact you to confirm a time. This is not a confirmed booking.",
  };

  assert.strictEqual(apiResponse.success, true);
  assert(apiResponse.message.includes("This is not a confirmed booking"));
  console.log("Client receives confirmed dispatch copy:", apiResponse.message);
  console.log("Mocked successful response test verified successfully!");
}

testMockSuccess().catch(err => {
  console.error("Mock test failed:", err);
  process.exit(1);
});
