from PIL import Image, ImageOps
from pathlib import Path

# Directories
PHOTOS_DIR = Path("photos")
GENERATED_DIR = Path("generated")
GENERATED_DIR.mkdir(exist_ok=True)  # Create if it doesn't exist

# Maximum size for the largest dimension
MAX_DIMENSION = 1920

for folder in PHOTOS_DIR.iterdir():
    if folder.is_dir():
        print(f"Processing folder: {folder.name}")
        for i, file in enumerate(folder.iterdir()):
            if file.is_file() and file.suffix.lower() in {".jpg", ".jpeg", ".png", ".bmp", ".webp", ".tiff"}:
                try:
                    with Image.open(file) as img:
                        # Fix EXIF-based rotation (important for JPEGs)
                        img = ImageOps.exif_transpose(img)

                        # Convert to RGB for JPEG
                        img = img.convert("RGB")

                        # Downscale while preserving aspect ratio
                        # The largest side will be MAX_DIMENSION
                        img.thumbnail((MAX_DIMENSION, MAX_DIMENSION), Image.Resampling.LANCZOS)

                        # Save to /generated with foldername-index.jpg
                        output_name = f"{folder.name}-{i}.jpg"
                        output_path = GENERATED_DIR / output_name
                        img.save(output_path, "JPEG", quality=95)
                        print(f"Saved {output_path}")

                except Exception as e:
                    print(f"Skipped {file.name}: {e}")
