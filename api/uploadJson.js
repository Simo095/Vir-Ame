import { put } from "@vercel/blob";

export default async function updateMenuHandler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  const data = req.body;

  try {
    const filename = "menu.json";
    const blob = await put(filename, JSON.stringify(data), {
      access: "public",
    });

    return res
      .status(200)
      .json({ message: "File updated successfully", url: blob.url });
  } catch (error) {
    return res.status(500).json({ error: req });
  }
}
