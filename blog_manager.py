import os
import shutil
import frontmatter


def is_valid_markdown(file_path):
    with open(file_path, "r", encoding="utf-8") as file:
        first_line = file.readline().strip()
        return first_line == "---" and (
            "Excalidraw" not in file_path and "excalidraw" not in file_path
        )


def get_filename_property(file_path):
    # Read the markdown file
    with open(file_path, "r", encoding="utf-8") as file:
        post = frontmatter.load(file)

    # Get the 'filename' property from the metadata
    filename = post.get("filename", None)
    print(f"Filename: {filename}")
    return filename


def copy_valid_markdown_files(src_dir, dst_dir):
    if not os.path.exists(dst_dir):
        os.makedirs(dst_dir)

    for root, _, files in os.walk(src_dir):
        for file in files:
            if file.endswith(".md"):
                file_path = os.path.join(root, file)
                if is_valid_markdown(file_path):
                    original_file_name = file
                    renamed_file = get_filename_property(file_path)
                    if renamed_file not in os.listdir(dst_dir):
                        print(f"File {renamed_file} not in {dst_dir}")
                        print(f"Copying: {file_path} to {dst_dir}")
                        shutil.copy(file_path, dst_dir)
                        os.rename(
                            f"{dst_dir}/{original_file_name}",
                            f"{dst_dir}/{renamed_file}",
                        )
                        print(f"Copied: {file_path} to {dst_dir}")


# Usage
src_directory = "C:/git/KumarsNotes"
dst_directory = "C:/git/kumarshantanu/nextjs-blog/posts/"
copy_valid_markdown_files(src_directory, dst_directory)
